import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Observable } from 'rxjs';
import { User } from './auth/models/user.model';
import { getUser, getIsLoggedIn, getIsLoading, getIsAdmin, getLanguage } from './auth/store/auth.selectors';

import * as fromAuth from './auth/store/auth.actions';
import { Language } from './shared/models/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  language$: Observable<Language>;

  constructor(
    private store: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);
    this.language$ = this.store.select(getLanguage);
  }

  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
  }

}
