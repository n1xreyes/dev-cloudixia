import { Injectable } from '@angular/core';
import { Observable, of, from, Subject } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import algoliasearch, { SearchIndex } from 'algoliasearch';
import { environment } from 'src/environments/environment';
import { MarketplaceListingPayload } from '../models/marketplace-listing-payload.model';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { BuildFileMetadataService } from '../../shared/components/image-upload/build-file-metadata.service';
import { ImageUploadState } from '../../store/image-upload/image-upload.reducers';
import { ImageUploadService } from '../../store/image-upload/image-upload.service';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  LISTING_PREFIX = 'listings';
  public PENDING_PREFIX = 'pendingListings';
  USERS_PREFIX = 'users';
  index: SearchIndex;
  imageUrl: string;

  private imageUploadState: Subject<ImageUploadState> = new Subject<ImageUploadState>();

  constructor(private fs: AngularFirestore,
              private buildFileMetadataService: BuildFileMetadataService,
              private imageUploadService: ImageUploadService) {
    // Create Algolia Reference
    this.index = algoliasearch(environment.algolia.appId, environment.algolia.apiKey)
      .initIndex(environment.algolia.indexName);

    this.getImageUploadState();
  }

  async update(project: Listing, file?: File) {
    if (file) {
      // build fileMetadata
      const fileMeta = this.buildFileMetadataService.buildFileMetadata(project.userId, project.uid);
      // get photoURL
      await this.imageUploadService.uploadImage(file, fileMeta).toPromise().then((payload: any) => {
        if (payload.URL) {
          this.imageUrl = payload.URL;
        }
      });
      if (this.imageUrl) {
        project.photoUrl = this.imageUrl;
      }
    }
    return of(this.fs.doc(`${this.LISTING_PREFIX}/${project.uid}/`).update({ ...project }));
  }

  delete(listing: Listing) {
    const batch = this.fs.firestore.batch();

    batch.delete(this.fs.firestore.collection(this.LISTING_PREFIX).doc(listing.uid));
    batch.update(this.fs.firestore.doc(`userProfiles/${listing.userId}`),
      { listings: firebase.firestore.FieldValue.arrayRemove(listing.uid) }
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
  async add(listing: Listing, file?: File) {
    const newKey = this.fs.createId();
    listing.uid = newKey;

    if (file) {
      // build fileMetadata
      const fileMeta = this.buildFileMetadataService.buildFileMetadata(listing.userId, listing.uid);
      // get photoURL
      await this.imageUploadService.uploadImage(file, fileMeta).toPromise().then((payload: any) => {
        if (payload.URL) {
          this.imageUrl = payload.URL;
        }
      });
      if (this.imageUrl) {
        listing.photoUrl = this.imageUrl;
      }
    }

    const batch = this.fs.firestore.batch();

    // Save the actual listing file plus a reference for the user
    batch.set(this.fs.firestore.collection(this.PENDING_PREFIX).doc(listing.uid), listing);
    batch.update(this.fs.firestore.doc(`users/${listing.userId}`),
      { pendingListings: firebase.firestore.FieldValue.arrayUnion(listing.uid) }
    );

    return batch.commit().then();
  }

  async updatePending(project: Listing, file?: File) {
    if (file) {
      // build fileMetadata
      const fileMeta = this.buildFileMetadataService.buildFileMetadata(project.userId, project.uid);
      // get photoURL
      await this.imageUploadService.uploadImage(file, fileMeta).toPromise().then((payload: any) => {
        if (payload.URL) {
          this.imageUrl = payload.URL;
        }
      });
      if (this.imageUrl) {
        project.photoUrl = this.imageUrl;
      }
    }
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
      { pendingListings: firebase.firestore.FieldValue.arrayRemove(listing.uid) }
    );

    return batch.commit().then();
  }

  getUserProfile(userId: string): Observable<any> {
    return this.fs.doc(`userProfiles/${userId}`).valueChanges();
  }

  getUserById(userId: string): Observable<any> {
    return this.fs.doc(`${this.USERS_PREFIX}/${userId}`).valueChanges();
  }

  getImageUploadState() {
    this.imageUploadState.subscribe((state: ImageUploadState) => {
      if (state && state.url) {
        this.imageUrl = state.url;
      }
    });
  }

}
