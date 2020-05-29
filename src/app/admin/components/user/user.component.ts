import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {User} from '../../../auth/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() userSelected = new EventEmitter<any>();
  @Output() addAdmin = new EventEmitter<any>();
  @Output() removeAdmin = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  selectUser() {
    this.userSelected.emit(this.user);
  }

  addAdminPrivileges() {
    this.addAdmin.emit(this.user);
  }

  removeAdminPrivileges() {
    this.removeAdmin.emit(this.user);
  }

}
