import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserProfile } from '../../auth/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { getUser, getUserProfile } from '../../auth/store/auth.selectors';
import * as fromAuth from '../../auth/store/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User | null>;
  userProfile$: Observable<UserProfile | null>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select(getUser);
    this.userProfile$ = this.store.select(getUserProfile);
  }

  updateProfile(userData: any) {
    this.store.dispatch(new fromAuth.SaveUser(userData));
  }

  logoutUser(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested({ user }));
  }

}
