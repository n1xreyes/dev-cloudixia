import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketplaceService } from '../../services/marketplace.service';
import { UserProfile } from 'src/app/auth/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { MarketplacePurchase } from '../../store/marketplace.actions';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {

  listing: Listing;
  isLoading = true;
  listingUserProfile: UserProfile;

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private marketplaceService: MarketplaceService,
    private store: Store<AppState>
  ) {
    this._route.params.subscribe(params => {
      this.marketplaceService.getListing(params.id).subscribe(
        (payload: Listing) => {
          this.listing = payload;
          if (this.listing == null) {
            console.log('Listing not found.');
            return;
          }

          this.isLoading = false;

          if (this.listing.userId) {
            this.marketplaceService.getUserProfile(this.listing.userId).subscribe(profilePayload => {
              this.listingUserProfile = profilePayload;
            });
          }
        }
      );
    });
  }

  ngOnInit(): void {
  }

  purchase(): void {
    this.store.dispatch(new MarketplacePurchase({ listing: this.listing }));
  }

  openUserProfile() {
    this.router.navigateByUrl('/user/' + this.listing.userId);
  }

}
