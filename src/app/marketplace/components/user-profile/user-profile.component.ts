import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserProfile } from 'src/app/auth/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { MarketplaceService } from '../../services/marketplace.service';
import { Listing } from 'src/app/shared/models/listing.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  userProfile: UserProfile;
  listings: Listing[];
  userProfileId: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private _route: ActivatedRoute,
    private marketplaceService: MarketplaceService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this._route.params.subscribe(params => {
          this.userProfileId = params.id;
          this.marketplaceService.getUserProfile(params.id).subscribe(userPayload => {
              this.userProfile = userPayload;
          });
          this.marketplaceService.getUsersListings(params.id).subscribe((listings: Listing[]) => {
              this.listings = listings;
          });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
