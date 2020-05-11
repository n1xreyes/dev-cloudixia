import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/models/user.model';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileUserComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<any>();
  @Output() photoUrlUpdated = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

  setUserPhotoUrl(url: string) {
    const updatedUser: User = {
    ...this.user,
    photoUrl: url
    };
    this.photoUrlUpdated.emit({user: { updatedUser }});
  }

}
