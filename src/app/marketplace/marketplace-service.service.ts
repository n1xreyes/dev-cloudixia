import { Injectable } from '@angular/core';

import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { Project } from '../projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  PREFIX = 'listings'

  constructor(private db: AngularFireDatabase) { }

  add(listing: Project, listingKey: string) {
    const listings = this.db.database.ref(`${this.PREFIX}`).child(`${listingKey}`)
    return listings.set(listing);
  }

  update(project: Project, userId: string) {
    return of(this.db.object(`${this.PREFIX}/${userId}/` + project.key)
      .update({
        title: project.title,
        description: project.description,
        photoUrl: project.photoUrl
      }));
  }

  delete(listing: Project) {
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
