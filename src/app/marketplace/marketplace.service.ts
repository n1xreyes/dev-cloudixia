import { Injectable } from '@angular/core';

import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { Listing } from '../shared/models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  PREFIX = 'listings'

  constructor(private db: AngularFireDatabase) { }

  add(listing: Listing, listingKey: string) {
    const listings = this.db.database.ref(`${this.PREFIX}`).child(`${listingKey}`)
    return listings.set(listing);
  }

  update(project: Listing, userId: string) {
    return of(this.db.object(`${this.PREFIX}/${userId}/` + project.key)
      .update({
        title: project.title,
        description: project.description,
        photoUrl: project.photoUrl
      }));
  }

  delete(listing: Listing) {
    return this.db.object(`${this.PREFIX}/${listing.key}`).remove();
  }

  getListing(listingId: string): Observable<SnapshotAction<any>> {
    return this.db.object(`${this.PREFIX}/${listingId}`).snapshotChanges();
  }

  // to replace with algolia
  getAllListings() {    
    return this.db.list(this.PREFIX).snapshotChanges();
  }
}
