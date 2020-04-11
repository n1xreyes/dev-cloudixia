import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';
import { ActivatedRoute } from '@angular/router';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {

  listing: Listing;  // should be async to pick up changes? or will confuse users?
  isLoading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private marketplaceService: MarketplaceService
  ) {
    this._route.params.subscribe(params => {

      this.marketplaceService.getListing(params.id).subscribe(
        payload => {
          this.listing = payload.payload.val();
          this.isLoading = false;
        }
      )

    });

  }

  ngOnInit(): void {
  }

}
