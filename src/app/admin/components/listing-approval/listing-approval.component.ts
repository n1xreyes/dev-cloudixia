import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import { Store } from '@ngrx/store';
import { getPendingListingLoading, getPendingListings } from '../../store/admin.selectors';
import { AppState } from 'src/app/reducers';
import * as adminActions from '../../store/admin.actions';
import { take } from 'rxjs/operators';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import * as fromAdmin from '../../store/admin.actions';

@Component({
  selector: 'app-listing-approval',
  templateUrl: './listing-approval.component.html',
  styleUrls: ['./listing-approval.component.css']
})
export class ListingApprovalComponent implements OnInit {
  listings$: Observable<Listing[]>;
  isLoading$: Observable<boolean>;

  private modalRef: MDBModalRef;

  modalConfig = {
    class: 'modal-dialog-centered'
  };

  getCategoryNames = Listing.getCategoryNames;

  constructor(private store: Store<AppState>, private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getPendingListingLoading);

    // this will get run everytime the component gets created, instead of once
    this.listings$ = this.store.select(getPendingListings);
    this.store.dispatch(new adminActions.GetPendingListings());
  }

  onDelete(listing: Listing) {
    this.modalRef = this.modalService.show(
      ConfirmModalComponent,
      this.modalConfig
    );

    this.modalRef.content.heading = 'Delete Listing?';
    this.modalRef.content.description = 'Are you sure you want to delete this item?';
    this.modalRef.content.confirmBtnColor = 'red';
    this.modalRef.content.confirmBtnText = 'Delete';

    this.modalRef.content.confirmation
      .pipe(take(1))
      .subscribe((confirmation: boolean) => {
        if (confirmation && listing.userId) {
          this.store.dispatch(
            new fromAdmin.DeletePendingUserProject({
              listingUID: listing.uid
            })
          );
        } else if (!listing.userId) {
          console.log("ERROR - NO USERID")
        }
      });
  }

  onApprove(listing: Listing) {
    this.modalRef = this.modalService.show(
      ConfirmModalComponent,
      this.modalConfig
    );

    this.modalRef.content.heading = 'Approve Listing?';
    this.modalRef.content.description = 'Are you sure you want to approve this item?';
    this.modalRef.content.confirmBtnColor = 'primary';
    this.modalRef.content.confirmBtnText = 'Approve';

    this.modalRef.content.confirmation
      .pipe(take(1))
      .subscribe((confirmation: boolean) => {
        if (confirmation) {
          this.store.dispatch(
            new fromAdmin.ApproveUserProject({
              listingUID: listing.uid
            })
          );
        } else if (!listing.userId) {
          console.log("ERROR - NO USERID")
        }
      });
  }

}