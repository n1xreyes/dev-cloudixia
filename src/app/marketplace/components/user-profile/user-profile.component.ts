import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/auth/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { MarketplaceService } from '../../services/marketplace.service';
import { Listing } from 'src/app/shared/models/listing.model';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile;
  listings: Listing[];
  userProfileId: string;

  constructor(
    private _route: ActivatedRoute,
    private marketplaceService: MarketplaceService
  ) { }

  // TODO: move this code to effect/selector/action all that ngrx crap
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.userProfileId = params.id;
      this.marketplaceService.getUserProfile(params.id).subscribe(
        userPayload => {
          this.userProfile = userPayload;
          if (!userPayload.listings || !userPayload.listings.length) {
            this.listings = [];
            return;
          }

          const listings$ = userPayload.listings.map((listingId: string) => {
            return this.marketplaceService.getListing(listingId);
          });
          combineLatest(listings$).subscribe( (listingsPayload: any) => {
            this.listings = listingsPayload;
          });
        }
      );
    });
  }

}
