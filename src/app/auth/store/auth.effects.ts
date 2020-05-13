import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable, of, defer } from 'rxjs';
import { map, switchMap, catchError, tap, take, withLatestFrom } from 'rxjs/operators';

import * as auth from './../store/auth.actions';
import { User } from '../models/user.model';
import { Language } from '../../shared/models/language.enum';
import { LanguageService } from 'src/app/shared/language.service';
import { select, Store } from '@ngrx/store';
import { getUser } from './auth.selectors';
import { AppState } from 'src/app/reducers';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
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
          let user: User = {
            uid: fireCreds.user?.uid || '',
            email: fireCreds.user?.email || '',
            firstName: payload.firstName,
            lastName: payload.lastName,
            providerId: fireCreds.user?.providerId || '',
            userProfile: {
              photoUrl: fireCreds.user?.photoURL || 'https://www.pngfind.com/pngs/m/568-5682880_rothenburg-james-fa-user-circle-icon-hd-png.png',
              displayName: payload.firstName
            }
          }
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
    switchMap(payload =>this.authService.socialLogin(payload.authProvider).pipe(
      map((fireCreds: firebase.auth.UserCredential) => {
        let user: User = {
          uid: fireCreds.user?.uid || '',
          email: fireCreds.user?.email || '',
          firstName: fireCreds.user?.displayName?.split(" ")[0] || '',
          lastName: fireCreds.user?.displayName?.split(" ")[1],
          providerId: fireCreds.user?.providerId || '',
          userProfile: {
            photoUrl: fireCreds.user?.photoURL || '',
            displayName: fireCreds.user?.displayName?.split(" ")[0] || ''
          }
        }
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
      ]
    })
  )

  @Effect({ dispatch: false })
  saveUser$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.SAVE_USER),
    map( (action: auth.SaveUser) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([payload, user]: any) => {
      let newUserDetails: User = Object.assign({}, user);

      newUserDetails.country = payload.user.country ? payload.user.country : '';
      newUserDetails.city = payload.user.city ? payload.user.city : '';
      newUserDetails.poBox = payload.user.poBox ? payload.user.poBox : '';
      newUserDetails.street = payload.user.street ? payload.user.street : '';
      newUserDetails.userProfile = {
        photoUrl: payload.user.userProfile.photoUrl ? payload.user.userProfile.photoUrl : '',
        displayName: newUserDetails.userProfile.displayName ? newUserDetails.userProfile.displayName : ''
      };

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
    switchMap( (payload: any) => this.authService.checkUserRole(payload.uid)
      .pipe(
        map( (isAdmin: boolean) => {
          return new auth.UpdateUserRole({ isAdmin });
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
          if (res.user?.uid)
            return new auth.GetUserDetails( res.user?.uid);
          else 
            return new auth.AuthError({error: 'Fetch user details failed!'})
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
    map( (action: auth.LogoutRequested) => action.payload),
    switchMap((payload: any) => this.authService.logout(payload.user.uid)
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
  getUserDetails$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.GET_USER_DETAILS),
    switchMap((payload: any) => this.authService.getDBUser(payload.uid).pipe(
      map (userDetails => userDetails),
      switchMap((user: User)=> {
          return [
            new auth.LoginSuccess({ user })
          ]
      })
    ))
  );

  @Effect()
  init$: Observable<any> = defer(() => {
    return of(new auth.GetUser());
  });
}
