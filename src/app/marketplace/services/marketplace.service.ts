import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of, from } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import algoliasearch, { SearchIndex } from 'algoliasearch';
import { environment } from 'src/environments/environment';
import { ListingState } from 'src/app/shared/models/listing-state.enum';
import { MarketplaceListingPayload } from '../models/marketplace-listing-payload.model';
import { Category } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  LISTING_PREFIX = 'listings';
  PENDING_PREFIX = 'pendingListings';
  USERS_PREFIX = 'users';
  index: SearchIndex;

  constructor(private db: AngularFireDatabase) {
    // Create Algolia Reference
    this.index = algoliasearch(environment.algolia.appId, environment.algolia.apiKey)
      .initIndex(environment.algolia.indexName);
  }

  update(project: Listing) {
    return of(this.db.object(`${this.LISTING_PREFIX}/${project.uid}/`).update({ ...project }));
  }

  delete(listing: Listing) {
    return this.db.object(`${this.LISTING_PREFIX}/${listing.uid}`).remove();
  }

  getListing(listingId: string): Observable<any> {
    return this.db.object(`${this.LISTING_PREFIX}/${listingId}`).valueChanges();
  }

  getPendingListing(listingId: string): Observable<any> {
    return this.db.object(`${this.PENDING_PREFIX}/${listingId}`).valueChanges();
  }

  prepareMarketplaceFilters(categories: Category[]): string {
    return categories
      .map((category: Category) => {
        return `categories.name:"${category.name}"`;
      })
      .join(' OR ');
  }

  // Algolia API
  marketplaceListingSearch(query: MarketplaceListingPayload) {
    return from(this.index.search(query.query, {filters: this.prepareMarketplaceFilters(query.categories)}));
  }

  // Pending APIs
  add(listing: Listing) {
    const newKey = this.db.createPushId();
    listing.uid = newKey;
    return this.db.list(this.PENDING_PREFIX).set(listing.uid, listing);
  }

  updatePending(project: Listing) {
    return of(this.db.object(`${this.PENDING_PREFIX}/${project.uid}/`).update({ ...project }));
  }

  getPendingSearches() {
    return this.db.list(this.PENDING_PREFIX).snapshotChanges();
  }

  deletePending(listing: Listing): Promise<void> {
    return this.db.object(`${this.PENDING_PREFIX}/${listing.uid}`).remove();
  }

  approve(listingId: string): Promise<void> {
    return this.db.object(`${this.PENDING_PREFIX}/${listingId}`).update({state: ListingState.ACTIVE});
  }

  getUserProfile(userId: string): Observable<any> {
    return this.db.object(`${this.USERS_PREFIX}/${userId}/userProfile`).valueChanges();
  }

  getUsersPendingListingIds(userId: string): Observable<any> {
    return this.db.object(`${this.USERS_PREFIX}/${userId}/pendingListings`).valueChanges();
  }

}
