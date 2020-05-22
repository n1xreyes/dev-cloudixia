import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromProjects from './projects.actions';
import {ProjectsActionTypes} from './projects.actions';
import {select, Store} from '@ngrx/store';
import {map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {ProjectsService} from '../services/projects.service';
import {AppState} from '../../reducers/index';
import {getUser} from '../../auth/store/auth.selectors';
import {Listing} from 'src/app/shared/models/listing.model';
import {ListingState} from 'src/app/shared/models/listing-state.enum';
import {AuthService} from 'src/app/auth/services/auth.service';
import {MarketplaceService} from 'src/app/marketplace/services/marketplace.service';
import {combineLatest, Observable, of} from 'rxjs';
import {ImageUploadService} from '../../store/image-upload/image-upload.service';
import {BuildFileMetadataService} from '../../shared/components/image-upload/build-file-metadata.service';

// tslint:disable-next-line:max-line-length
const DEFAULT_PHOTO_URL = 'https://1m19tt3pztls474q6z46fnk9-wpengine.netdna-ssl.com/wp-content/themes/unbound/images/No-Image-Found-400x264.png';
const PHOTO_URL_PREFIX = 'https://cloudixia-images.s3.us-east-2.amazonaws.com/';

@Injectable()
export class ProjectsEffects {

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<AppState>,
    private authService: AuthService,
    private marketplaceService: MarketplaceService,
    private imageUploadService: ImageUploadService,
    private buildFileMetadataService: BuildFileMetadataService
    ) {}

  @Effect()
  query$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECTS_QUERY),
    withLatestFrom(this.authService.getAuthState()),
    mergeMap(([, user]: any) => {
      return this.marketplaceService.getUserProfile(user.uid).pipe(
        switchMap(payload => {
          if (!payload || !payload.listings || !payload.listings.length) {
            return of([]);
          }

          const listings$: Observable<Listing>[] = payload.listings.map( (listingId: string) => {
            return this.marketplaceService.getListing(listingId);
          });
          return combineLatest(listings$);
        }),
        map(payload => {
          return new fromProjects.ProjectsLoaded({projects: payload});
        })
      );
    })
  );

  @Effect()
  pendingQuery$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.MY_PENDING_LISTINGS_QUERY),
    withLatestFrom(this.authService.getAuthState()),
    mergeMap(([, user]: any) => {
      return this.marketplaceService.getUsersPendingListingIds(user.uid).pipe(
        switchMap(payload => {
          if (!payload || !payload.pendingListings || !payload.pendingListings.length) {
            return of([]);
          }
          const listings$: Observable<Listing>[] = payload.pendingListings.map( (listingId: string) => {
            return this.marketplaceService.getPendingListing(listingId);
          });
          return combineLatest(listings$);
        }),
        map(payload => {
          return new fromProjects.PendingListingsLoaded({projects: payload});
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
