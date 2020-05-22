import { Injectable } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import { ListingState } from 'src/app/shared/models/listing-state.enum';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(
    private marketplaceService: MarketplaceService
    ) { }

  add(project: Listing) {
    return this.marketplaceService.add(project);
  }

  delete(listing: Listing) {
    if (listing.state === ListingState.PENDING) {
      return this.marketplaceService.deletePending(listing);
    }
    return this.marketplaceService.delete(listing);
  }

  updateListing(listing: Listing, file?: File) {
    if (listing.state === ListingState.PENDING) {
      return this.marketplaceService.updatePending(listing, file);
    }

    return this.marketplaceService.update(listing, file);
  }

}
