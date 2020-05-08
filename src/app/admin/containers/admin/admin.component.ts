import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../app/reducers';

import * as fromAdmin from '../../store/admin.actions';
import { Observable } from 'rxjs';
import {
  getUsersList,
  getSelectedUser,
  getUsersListLoading,
} from '../../store/admin.selectors';
import { User } from '../../../auth/models/user.model';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) {}

  users$: Observable<any>;
  usersListLoading$: Observable<boolean>;
  selectedUser$: Observable<any>;
  selectedUser: any;
  uid: any;

  modalConfig = {
    class: 'modal-dialog-centered'
  };

  ngOnInit() {
    this.users$ = this.store.pipe(
      select(getUsersList),
      delay(0),
      map((users: User[]) => {
        if (!users || (users && users.length === 0)) {
          this.store.dispatch(new fromAdmin.GetUsersList());
        }
        return users;
      })
    );
    this.usersListLoading$ = this.store.select(getUsersListLoading);
  }

  onUserSelect(user: any) {
    this.uid = user.uid;
    this.selectedUser = user;
    this.selectedUser$ = this.store.select(getSelectedUser, user.uid);
  }

  onDetailsClose() {
    this.selectedUser = null;
  }

  addAdminPrivileges(user: any) {
    this.store.dispatch(new fromAdmin.AddAdminPrivileges({ userId: user.uid }));
  }

  removeAdminPrivileges(user: any) {
    this.store.dispatch(
      new fromAdmin.RemoveAdminPrivileges({ userId: user.uid })
    );
  }
}
