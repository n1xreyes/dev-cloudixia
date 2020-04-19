import { Injectable } from '@angular/core';

import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable, of, from } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import algoliasearch, { SearchIndex } from 'algoliasearch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  PREFIX = 'listings'
  index: SearchIndex;

  constructor(private db: AngularFireDatabase) {
    // Create Algolia Reference
    this.index = algoliasearch(environment.algolia.appId, environment.algolia.apiKey)
      .initIndex(environment.algolia.indexName)
  }

  add(listing: Listing) {
    const newKey = this.db.createPushId();
    listing.uid = newKey
    return this.db.list(this.PREFIX).set(listing.uid, listing);
  }

  update(project: Listing) {
    return of(this.db.object(`${this.PREFIX}/${project.uid}/`).update({ ...project }));
  }

  delete(listing: Listing) {
    return this.db.object(`${this.PREFIX}/${listing.uid}`).remove();
  }

  getListing(listingId: string): Observable<SnapshotAction<any>> {
    return this.db.object(`${this.PREFIX}/${listingId}`).snapshotChanges();
  }

  // to replace with algolia
  getAllListings() {
    return this.db.list(this.PREFIX).snapshotChanges();
  }

  textSearch(query: string) {
    // Algolia API
    return from(this.index.search(query));
  }

}
