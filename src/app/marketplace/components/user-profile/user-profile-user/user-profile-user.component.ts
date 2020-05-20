import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from 'src/app/auth/models/user.model';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';
import { take } from 'rxjs/operators';
import * as fromAuth from '../../../../auth/store/auth.actions'
import { MDBModalService } from 'angular-bootstrap-md';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
@Component({
  selector: 'app-user-profile-user',
  templateUrl: './user-profile-user.component.html',
  styleUrls: ['./user-profile-user.component.scss']
})
export class UserProfileUserComponent implements OnInit {
  @Input() userProfile: UserProfile;
  @Input() userProfileId: string;

  constructor(
    private modalService: MDBModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

  openModal(): void {
    const modalConfig = {
      class: 'modal-dialog-centered'
    };

    const modalRef = this.modalService.show(ContactModalComponent, modalConfig);

    modalRef.content.userProfile = this.userProfile;
    modalRef.content.heading = 'Send Message';

    modalRef.content.message
      .pipe(take(1))
      .subscribe( (payload: any) => {
        this.store.dispatch(new fromAuth.CreateChat(this.userProfileId, payload.message));
      });
  }

}
