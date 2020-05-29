import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../../../auth/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-preview',
  templateUrl: './user-profile-preview.component.html',
  styleUrls: ['./user-profile-preview.component.css']
})
export class UserProfilePreviewComponent implements OnInit {

  @Input() userProfile: UserProfile;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openUserProfile(): void {
    this.router.navigateByUrl('/user/' + this.userProfile.uid);
  }

}
