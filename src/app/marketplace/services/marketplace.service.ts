import { Injectable } from '@angular/core';

import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  PREFIX = 'listings'

  constructor(private db: AngularFireDatabase) { }

  add(listing: Listing) {
    const listings = this.db.list(this.PREFIX)
    return listings.push(listing);
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
