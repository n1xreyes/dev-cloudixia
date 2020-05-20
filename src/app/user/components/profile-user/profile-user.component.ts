import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {User, UserProfile} from '../../../auth/models/user.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../reducers';
import {getUser} from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileUserComponent implements OnInit {
  @Input() user: User;
  @Input() userProfile: UserProfile;
  @Output() logout = new EventEmitter<any>();
  @Output() photoUrlUpdated = new EventEmitter<any>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
    select(getUser)
    ).subscribe(userState => {
      if (userState) {
        this.user = userState;
      }
    });
  }

  onLogout() {
    this.logout.emit(this.user);
  }

  setUserPhotoUrl(url: string) {
    const updatedUserProfile: UserProfile = {
      ...this.user.userProfile,
      photoUrl: url
    };

    const updatedUser = {
    ...this.user,
    userProfile: updatedUserProfile
    };
    this.photoUrlUpdated.emit({user: updatedUser} );
  }

}
