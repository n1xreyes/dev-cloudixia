import { Injectable } from '@angular/core';

import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable, of, from } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import algoliasearch, { SearchIndex } from 'algoliasearch';
import { environment } from 'src/environments/environment';
import { ListingState } from 'src/app/shared/models/listing-state.enum';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import * as fromProjects from 'src/app/manage-listings/store/projects.actions';
import { ProjectChangeActions } from 'src/app/manage-listings/store/projects.reducer';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  LISTING_PREFIX = 'listings'
  PENDING_PREFIX = 'pendingListings'
  index: SearchIndex;

  constructor(private db: AngularFireDatabase, private store: Store<AppState>) {
    // Create Algolia Reference
    this.index = algoliasearch(environment.algolia.appId, environment.algolia.apiKey)
      .initIndex(environment.algolia.indexName)
  }

  update(project: Listing) {
    return of(this.db.object(`${this.LISTING_PREFIX}/${project.uid}/`).update({ ...project }));
  }

  delete(listing: Listing) {
    return this.db.object(`${this.LISTING_PREFIX}/${listing.uid}`).remove();
  }

  getListing(listingId: string): Observable<SnapshotAction<any>> {
    return this.db.object(`${this.LISTING_PREFIX}/${listingId}`).snapshotChanges();
  }

  // Algolia API
  textSearch(query: string) {
    return from(this.index.search(query));
  }

  // Indexed Query
  getUserListings(userId: string) {
    let allListings: Listing[] = []

  // Fetch first load of all listings
  this.db.database.ref(this.LISTING_PREFIX).orderByChild("userId").equalTo(userId).once("value", snapshot => {
    snapshot.forEach(childSnap => {
      allListings.push(childSnap.val())
    })
    // Now get all pending Listings
    this.db.database.ref(this.PENDING_PREFIX).orderByChild("userId").equalTo(userId).once("value", snapshot => {
      snapshot.forEach(childSnap => {
        allListings.push(childSnap.val())
      })
      this.store.dispatch(new fromProjects.ProjectsLoaded({projects: allListings}))
    })
  })

    // Setup listeners to keep in real time sync with all changes.
    // Need to do it this way because FireBase cannot return an Observable when searching by UserId
    // So we are manually setting up listeners for each event type
    this.db.database.ref(this.LISTING_PREFIX).orderByChild("userId").equalTo(userId).on("child_changed", snapshot => {
      this.store.dispatch(new fromProjects.ProjectChanged({project: snapshot.val(), action: ProjectChangeActions.UPDATE}))
    })
    this.db.database.ref(this.PENDING_PREFIX).orderByChild("userId").equalTo(userId).on("child_changed", snapshot => {
      this.store.dispatch(new fromProjects.ProjectChanged({project: snapshot.val(), action: ProjectChangeActions.UPDATE}))
    })    
    this.db.database.ref(this.LISTING_PREFIX).orderByChild("userId").equalTo(userId).on("child_added", snapshot => {
      this.store.dispatch(new fromProjects.ProjectChanged({project: snapshot.val(), action: ProjectChangeActions.CREATE}))
    })
    this.db.database.ref(this.PENDING_PREFIX).orderByChild("userId").equalTo(userId).on("child_added", snapshot => {
      this.store.dispatch(new fromProjects.ProjectChanged({project: snapshot.val(), action: ProjectChangeActions.CREATE}))
    })    
    this.db.database.ref(this.LISTING_PREFIX).orderByChild("userId").equalTo(userId).on("child_removed", snapshot => {
      this.store.dispatch(new fromProjects.ProjectChanged({project: snapshot.val(), action: ProjectChangeActions.DELETE}))
    })
    this.db.database.ref(this.PENDING_PREFIX).orderByChild("userId").equalTo(userId).on("child_removed", snapshot => {
      this.store.dispatch(new fromProjects.ProjectChanged({project: snapshot.val(), action: ProjectChangeActions.DELETE}))
    })  
  }

  // Pending APIs
  add(listing: Listing) {
    const newKey = this.db.createPushId();
    listing.uid = newKey
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

}
