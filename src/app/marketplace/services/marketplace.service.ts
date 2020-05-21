import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import algoliasearch, { SearchIndex } from 'algoliasearch';
import { environment } from 'src/environments/environment';
import { MarketplaceListingPayload } from '../models/marketplace-listing-payload.model';
import { AngularFirestore } from '@angular/fire/firestore';
// TODO, get rid of the stupid fucking import bullshit dsfjdsofjsadofjas
// warning in the browser
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  LISTING_PREFIX = 'listings';
  public PENDING_PREFIX = 'pendingListings';
  USERS_PREFIX = 'users';
  index: SearchIndex;

  constructor(private fs: AngularFirestore) {
    // Create Algolia Reference
    this.index = algoliasearch(environment.algolia.appId, environment.algolia.apiKey)
      .initIndex(environment.algolia.indexName);
  }

  update(project: Listing) {
    return of(this.fs.doc(`${this.LISTING_PREFIX}/${project.uid}/`).update({ ...project }));
  }

  delete(listing: Listing) {
    const batch = this.fs.firestore.batch();

    batch.delete(this.fs.firestore.collection(this.LISTING_PREFIX).doc(listing.uid));
    batch.update(this.fs.firestore.doc(`userProfiles/${listing.userId}`),
      { listings: firestore.FieldValue.arrayRemove(listing.uid) }
    );

    return batch.commit().then();
  }

  getListing(listingId: string) {
    return this.fs.doc(`${this.LISTING_PREFIX}/${listingId}`).valueChanges();
  }

  getPendingListing(listingId: string) {
    return this.fs.doc(`${this.PENDING_PREFIX}/${listingId}`).valueChanges();
  }

  // Algolia API
  marketplaceListingSearch(query: MarketplaceListingPayload) {
    return from(this.index.search(
      query.query,
      {
        filters: query.category && `categories:"${query.category.uid}"`
      }
    ));
  }

  // Pending APIs
  add(listing: Listing) {
    const newKey = this.fs.createId();
    listing.uid = newKey;

    const batch = this.fs.firestore.batch();

    // Save the actual listing file plus a reference for the user
    batch.set(this.fs.firestore.collection(this.PENDING_PREFIX).doc(listing.uid), listing);
    batch.update(this.fs.firestore.doc(`users/${listing.userId}`),
      { pendingListings: firestore.FieldValue.arrayUnion(listing.uid) }
    );

    return batch.commit().then();
  }

  updatePending(project: Listing) {
    return of(this.fs.doc(`${this.PENDING_PREFIX}/${project.uid}/`).update({ ...project }));
  }

  getPendingSearches() {
    return this.fs.collection(this.PENDING_PREFIX).valueChanges();
  }

  deletePending(listing: Listing): Promise<void> {
    const batch = this.fs.firestore.batch();
    batch.delete(this.fs.firestore.doc(`${this.PENDING_PREFIX}/${listing.uid}`));
    batch.update(
      this.fs.firestore.doc(`users/${listing.userId}`),
      { pendingListings: firestore.FieldValue.arrayRemove(listing.uid) }
    );

    return batch.commit().then();
  }

  getUserProfile(userId: string): Observable<any> {
    return this.fs.doc(`userProfiles/${userId}`).valueChanges();
  }

  getUserById(userId: string): Observable<any> {
    return this.fs.doc(`${this.USERS_PREFIX}/${userId}`).valueChanges();
  }

}
