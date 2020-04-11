import { Injectable } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';

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
  
  getAllListings() {
    return this.marketplaceService.getAllListings();
  }

  delete(listing: Listing) {
    return this.marketplaceService.delete(listing);
  }

  updateListing(listing: Listing) {
    return this.marketplaceService.update(listing);
  }

}
