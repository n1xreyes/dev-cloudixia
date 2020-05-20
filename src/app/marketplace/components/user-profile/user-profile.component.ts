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
  userProfile: UserProfile
  listings: Listing[]
  userProfileId: string;

  constructor(
    private _route: ActivatedRoute,
    private marketplaceService: MarketplaceService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.userProfileId = params.id;
      this.marketplaceService.getUserProfile(params.id).subscribe(
        payload => {
          this.userProfile = payload
          if (!payload.listings) {
            this.listings = []
            return;
          }

          let listings$ = Object.keys(payload.listings).map( (listingId: string) => {
            return this.marketplaceService.getListing(listingId)
          })
          combineLatest(listings$).subscribe( payload => {
            this.listings = payload
          })
        
        }
      )
    })
  }

}
