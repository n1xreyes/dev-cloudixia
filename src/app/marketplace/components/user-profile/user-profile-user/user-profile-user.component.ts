import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-user-profile-user',
  templateUrl: './user-profile-user.component.html',
  styleUrls: ['./user-profile-user.component.scss']
})
export class UserProfileUserComponent implements OnInit {
  @Input() userProfile: UserProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
