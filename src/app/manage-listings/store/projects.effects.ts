import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProjectsActionTypes } from './projects.actions';
import { Store, select } from '@ngrx/store';
import { map, withLatestFrom, mergeMap, switchMap } from 'rxjs/operators';
import { ProjectsService } from '../services/projects.service';

import * as fromProjects from './projects.actions';
import { AppState } from '../../reducers/index';
import { getUser } from '../../auth/store/auth.selectors';
import { Listing } from 'src/app/shared/models/listing.model';
import { ListingState } from 'src/app/shared/models/listing-state.enum';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import { DEFAULT_PHOTO_URL } from 'src/app/core/service/util.service';
import { CategoryService } from 'src/app/admin/services/category.service';
import { combineLatest, of } from 'rxjs';
import { User, UserProfile } from 'src/app/auth/models/user.model';

import {ImageUploadService} from '../../store/image-upload/image-upload.service';
import {BuildFileMetadataService} from '../../shared/components/image-upload/build-file-metadata.service';

const PHOTO_URL_PREFIX = 'https://cloudixia-images.s3.us-east-2.amazonaws.com/';

@Injectable()
export class ProjectsEffects {

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<AppState>,
    private authService: AuthService,
    private marketplaceService: MarketplaceService,
    private categoryService: CategoryService,
    private imageUploadService: ImageUploadService,
    private buildFileMetadataService: BuildFileMetadataService,
    ) {}

  @Effect()
  query$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECTS_QUERY),
    withLatestFrom(this.authService.getAuthState()),
    mergeMap(([, user]: any) => {
      return this.marketplaceService.getUserProfile(user.uid).pipe(
        switchMap((payload: UserProfile) => {
          if (!payload || !payload.listings || !payload.listings.length) {
            return of([]);
          }

          const listings$ = payload.listings
            .map((listingId: string) => {
              return this.marketplaceService.getListing(listingId)
                .pipe(
                  switchMap((listingPayload: Listing) => {
                    return    this.categoryService.get(listingPayload.categories[0])
                    .pipe(
                      map((categoryPayload) => ({
                        category: categoryPayload.payload.data(),
                        listing: listingPayload
                      })
                    ));
                  }
                  )
                );
            });
          return combineLatest(listings$);
        }),
        map(payload => {
          const projects = payload.map(({ listing, category }) => ({
            ...listing,
            category
          }));
          return new fromProjects.ProjectsLoaded({ projects });
        })
      );
    })
  );

  @Effect()
  pendingQuery$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.MY_PENDING_LISTINGS_QUERY),
    withLatestFrom(this.authService.getAuthState()),
    mergeMap(([, user]: any) => {
      return this.marketplaceService.getUserById(user.uid).pipe(
        switchMap((payload: User) => {
          if (!payload || !payload.pendingListings || !payload.pendingListings.length) {
            return of([]);
          }
          const listings$ = payload.pendingListings
            .map((listingId: string) => {
              return this.marketplaceService.getPendingListing(listingId)
                .pipe(
                  switchMap((listingPayload: Listing) => {
                    return this.categoryService.get(listingPayload.categories[0])
                    .pipe(
                      map((categoryPayload) => ({
                        category: categoryPayload.payload.data(),
                        listing: listingPayload
                      })
                    ));
                  }
                  )
                );
            });
          return combineLatest(listings$);
        }),
        map(payload => {
          const projects = payload.map(({ listing, category }) => ({
            ...listing,
            category
          }));
          return new fromProjects.PendingListingsLoaded({ projects });
        })
      );
    })
  );

  // Todo, dispatch a load & resolve thing
  @Effect({dispatch: false})
  added$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_ADDED),
    map((action: fromProjects.ProjectAdded) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload, user]: any) => {
      const project: Listing = {...payload.project};
      const projectPhoto: File = payload.file;

      project.userId = user.uid;
      project.state = ListingState.PENDING;

      if (!projectPhoto) {
        project.photoUrl = DEFAULT_PHOTO_URL;
        return of(project);
      } else {
          return this.imageUploadService.uploadImage(projectPhoto,
            this.buildFileMetadataService.buildFileMetadata(project.userId, project.uid)).pipe(
                map((payload: any) => {
                    project.photoUrl = payload.URL;
                    return project;
                })
            );
      }
    }),
    map( (listing: any) => {
        console.log(listing);
        if (listing.file) {
            delete listing.file;
        }
        this.projectsService.add(listing).then( payload => {
        console.log('payload: ', payload)
        })
    })
  );

  // Todo, dispatch a load & resolve thing
  @Effect({dispatch: false})
  delete$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_DELETED),
    map((action: fromProjects.ProjectDeleted) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([payload]: any) => this.projectsService.delete(payload.project))
  );

  // Todo, dispatch a load & resolve thing
  @Effect({dispatch: false})
  edit$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_EDITED),
    map((action: fromProjects.ProjectEdited) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap((([payload]: any) => {
        const project = {...payload.project};
        delete project.file;
        if (payload.file) {
            project.photoUrl = PHOTO_URL_PREFIX + this.buildFileMetadataService.getListingPhotoFileName(project.userId, project.uid);
            return this.projectsService.updateListing(project, payload.file);
        } else {
            return this.projectsService.updateListing(project);
        }
    })
  ));

}
