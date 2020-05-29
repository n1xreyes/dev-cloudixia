import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Observable } from 'rxjs';
import { User, UserProfile } from './auth/models/user.model';
import { getIsLoggedIn, getIsLoading, getIsAdmin, getLanguage, getUserProfile } from './auth/store/auth.selectors';

import * as fromAuth from './auth/store/auth.actions';
import { Language } from './shared/models/language.enum';
import { CustomRouterService } from './core/service/custom-router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  userProfile$: Observable<UserProfile | null>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  language$: Observable<Language>;

  constructor(
    private store: Store<AppState>,
    private customRouterService: CustomRouterService
  ) { }

  ngOnInit() {
    this.userProfile$ = this.store.select(getUserProfile);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);
    this.language$ = this.store.select(getLanguage);
    this.customRouterService.ngOnInit();
  }

  ngOnDestroy() {
    this.customRouterService.ngOnDestroy();
  }

  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
  }
}
