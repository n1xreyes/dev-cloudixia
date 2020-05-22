import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable, of, defer, EMPTY } from 'rxjs';
import { map, switchMap, catchError, tap, take, withLatestFrom } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import * as auth from './../store/auth.actions';
import { User } from '../models/user.model';
import { Language } from '../../shared/models/language.enum';
import { LanguageService } from 'src/app/shared/language.service';
import { select, Store } from '@ngrx/store';
import { getUser, getUserChats } from './auth.selectors';
import { AppState } from 'src/app/reducers';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private marketplaceService: MarketplaceService,
    private router: Router,
    private languageService: LanguageService,
    private store: Store<AppState>
  ) {}

  // buyer - reg user
  @Effect()
  emailRegisterAction$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.EMAIL_REGISTER_REQUESTED),
    map((action: auth.EmailRegisterRequested) => action.payload),
    switchMap(payload =>
      this.authService.registerWithEmail(payload.email, payload.password).pipe(
        map((fireCreds: firebase.auth.UserCredential) => {
          const user: User = {
            uid: fireCreds.user?.uid || '',
            email: fireCreds.user?.email || '',
            firstName: payload.firstName,
            lastName: payload.lastName,
            providerId: fireCreds.user?.providerId || '',
            userProfile: {
              photoUrl: fireCreds.user?.photoURL ||
              'https://www.pngfind.com/pngs/m/568-5682880_rothenburg-james-fa-user-circle-icon-hd-png.png',
              displayName: payload.firstName
            },
            pendingListings: []
          };
          return user;
        }),
        switchMap((user: User) => [new auth.RegisterSuccess({ user: user })]),
        tap(() => this.router.navigateByUrl('')),
        catchError(error => of(new auth.AuthError({ error })))
      ),
    )
  );

  // buyer - reg user
  // todo: better way to parse social reg first+last name
  @Effect()
  SocialRegisterAction$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.SOCIAL_REGISTER_REQUESTED),
    map((action: auth.SocialRegisterRequested) => action.payload),
    switchMap(payload => this.authService.socialLogin(payload.authProvider).pipe(
      map((fireCreds: firebase.auth.UserCredential) => {
        const user: User = {
          uid: fireCreds.user?.uid || '',
          email: fireCreds.user?.email || '',
          firstName: fireCreds.user?.displayName?.split(' ')[0] || '',
          lastName: fireCreds.user?.displayName?.split(' ')[1],
          providerId: fireCreds.user?.providerId || '',
          userProfile: {
            photoUrl: fireCreds.user?.photoURL || '',
            displayName: fireCreds.user?.displayName?.split(' ')[0] || ''
          },
          pendingListings: []
        };
        return user;
      }),
      switchMap((user: User) => [new auth.RegisterSuccess({user: user})]),
      tap(() => this.router.navigateByUrl('')),
      catchError(error => of(new auth.AuthError({ error })))
    ))
  );

  @Effect()
  registerSuccess$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.REGISTER_SUCCESS),
    map((action: auth.RegisterSuccess) => action.payload),
    map((payload: { user: User }) => {
      this.authService.saveUser(payload.user);
      return payload.user;
    }),
    switchMap( (payload: User) => {
      return [
        new auth.LoginSuccess({ user: payload })
      ];
    })
  );

  @Effect({ dispatch: false })
  saveUser$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.SAVE_USER),
    map( (action: auth.SaveUser) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([payload, user]: any) => {
      const newUserDetails: User = Object.assign({}, user);

      newUserDetails.country = payload.user.country;
      newUserDetails.city = payload.user.city;
      newUserDetails.poBox = payload.user.poBox;
      newUserDetails.street = payload.user.street;

      this.authService.saveUser(newUserDetails);
    })
  );

  @Effect({ dispatch: false })
  updateOnlineStatus$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.UPDATE_ONLINE_STATUS),
    map( (action: auth.UpdateOnlineStatus) => action.payload),
    switchMap( (payload: any) => this.authService.updateOnlineStatus(payload.uid, payload.status))
  );

  @Effect()
  checkUserRole$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_ADMIN_ROLE),
    map( (action: auth.CheckAdminRole) => action.payload),
    switchMap( (payload: any) => this.authService.checkAdminRole(payload.uid)
      .pipe(
        map( (firestorePayload: any) => {
          return new auth.UpdateUserRole({ isAdmin: firestorePayload.isAdmin });
        // map( (isAdmin: boolean) => {
        //   return new auth.UpdateUserRole({ isAdmin });
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );

  @Effect({dispatch: false})
  updateLanguage$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.LANGUAGE_CHANGE),
    map( (action: auth.LanguageChange) => action.payload),
    map( (payload: {language: Language}) => {
      this.languageService.setLanguage(payload.language);
    })
  );

  @Effect()
  loginAction$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.LOGIN_REQUESTED),
    map((action: auth.LoginRequested) => action.payload),
    switchMap(payload =>
      this.authService.loginWithEmail(payload.email, payload.password).pipe(
        map((res: firebase.auth.UserCredential) => {
          if (res.user?.uid) {
            return new auth.GetUserDetails( res.user?.uid);
          } else {
            return new auth.AuthError({error: 'Fetch user details failed!'});
          }
        }),
        tap(() => this.router.navigateByUrl('')),
        catchError(error => of(new auth.AuthError({ error })))
      )
    )
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.LOGIN_SUCCESS),
    map( (action: auth.LoginSuccess) => action.payload),
    switchMap( (payload: any) => {
        return [
          new auth.UpdateOnlineStatus({ uid: payload.user.uid, status: true }),
          new auth.CheckAdminRole( {uid: payload.user.uid })
        ];
    })
  );

  @Effect()
  socialLogin$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.SOCIAL_LOGIN),
    map((action: auth.SocialLogin) => action.payload),
    switchMap(payload => this.authService.socialLogin(payload.authProvider)
      .pipe(
        map((res: any) => {
          const user = {
            uid: res.user.uid,
          };
          return user;
        }),
        switchMap((user: User) =>
          [
            new auth.LoginSuccess({ user }),
            new auth.CheckAdminRole({ uid: user.uid }),
            new auth.GetUserDetails(user.uid)
          ]
        ),
        tap(() => this.router.navigateByUrl('')),
        catchError(error => {
          return of(new auth.AuthError({ error }));
        })
      )
    )
  );

  @Effect()
  logoutAction$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.LOGOUT_REQUESTED),
    withLatestFrom(this.authService.getAuthState()),
    switchMap((payload: any) => this.authService.logout(payload.uid)
      .pipe(
        map(() => (new auth.LogoutCompleted())),
        tap(() => this.router.navigateByUrl('')),
        catchError(error => {
          return of(new auth.AuthError({ error }));
        }
        )
      )
    )
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.GET_USER),
    switchMap(() => this.authService.getAuthState()
      .pipe(
        take(1),
        map((authData: any) => {
          if (authData) {
            return new auth.GetUserDetails(authData.uid);
          } else {
            return new auth.LoginFailed();
          }
        }),
        catchError(error => of(new auth.AuthError({ error })))
      )
    )
  );

  @Effect()
  getUserProfile$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.GET_USER_PROFILE),
    map( (action: auth.GetUserProfile) => action.uid),
    switchMap((userId: string) => {
      return this.marketplaceService.getUserProfile(userId)
        .pipe(
        map((rawUserProfile: any) => {
          if (rawUserProfile) {
            return new auth.GotUserProfile({ userProfile: rawUserProfile});
          } else {
            return new auth.AuthError({error: 'no clue what'});
          }
        }),
        catchError(error => of(new auth.AuthError({ error })))
      );
      })
  );

  @Effect()
  getUserDetails$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.GET_USER_DETAILS),
    switchMap((payload: any) => this.authService.getDBUser(payload.uid).pipe(
      map (userDetails => userDetails),
      switchMap((user: User) => {
          return [
            new auth.GetUserProfile(user.uid),
            new auth.GetChats(),
            new auth.LoginSuccess({ user })
          ];
      })
    ))
  );

  @Effect({dispatch: false})
  getChats$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.GET_CHATS),
    withLatestFrom(this.authService.getAuthState()),
    map(([_, user]: any) => {
      if (!user) { return; }
      this.authService.initUserChatLists(user.uid);
    })
  );

  @Effect({dispatch: false})
  getChatMessages$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.GET_CHAT_MESSAGES),
    map((payload: auth.GetChatMessages) => payload),
    map((payload: any) => this.authService.getMessagesForChat(payload.chatId))
  );

  @Effect()
  createChat$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CREATE_CHAT),
    map((payload: auth.CreateChat) => payload),
    withLatestFrom(this.store.pipe(select(getUserChats))),
    switchMap(([payload, userChats]) => {
      // chat already exists
      // todo: this will only check if the chat exists in the most recent X.
      // if it is an old chat, it won't show up in the user's list
      // in the browser
      const userChat = userChats.find(chat => chat.receiverId === payload.receiverId);
      if (userChat) {
        // add message to existing chat
        return [
          new auth.NewChatMessage(
            payload.receiverId,
            payload.message,
            userChat.chatId,
          )
        ];
      }

      // chat does not already exist
      this.authService.createNewChat(
        payload.receiverId,
        payload.message
      );

      return EMPTY;
    }),
  );

  @Effect({dispatch: false})
  newChatMessage$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.NEW_CHAT_MESSAGE),
    map((payload: auth.NewChatMessage) => payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([payload, user]) =>
    this.authService.addNewChatMessage(
        {
          receiverId: payload.receiverId,
          chatId: payload.chatId,
          message: payload.message,
          sender: user?.uid || '',
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
      )
    )
  );

  @Effect()
  init$: Observable<any> = defer(() => {
    return of(new auth.GetUser());
  });
}
