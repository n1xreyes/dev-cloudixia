import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/models/user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainProfileComponent implements OnInit {
  @Input() user: User;
  @Output() profileUpdate = new EventEmitter<any>();

  updateProfileForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.updateProfileForm = new FormGroup({
      displayName: new FormControl(this.user.displayName),
      photoUrl: new FormControl(this.user.photoUrl),
      phoneNumber: new FormControl(this.user.phoneNumber),
      country: new FormControl(this.user.country),
      province: new FormControl(this.user.province),
      city: new FormControl(this.user.city),
      street: new FormControl(this.user.street),
    });
  }

  onProfileUpdate() {
    this.profileUpdate.emit({ user: this.updateProfileForm.value });
  }

}
