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
import { combineLatest, of, Observable } from 'rxjs';
import { DEFAULT_PHOTO_URL } from 'src/app/core/service/util.service';

@Injectable()
export class ProjectsEffects {

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<AppState>,
    private authService: AuthService,
    private marketplaceService: MarketplaceService
    ) {}

  @Effect()
  query$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECTS_QUERY),
    withLatestFrom(this.authService.getAuthState()),
    mergeMap(([, user]: any) => {
      return this.marketplaceService.getUserProfile(user.uid).pipe(
        switchMap(payload => {
          if (!payload || !payload.listings) {
            return of([]);
          }

          const listings$: Observable<Listing>[] = Object.keys(payload.listings).map( (listingId: string) => {
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
          if (!payload) {
            return of([]);
          }
          const listings$: Observable<Listing>[] = Object.keys(payload).map((listingId: string) => {
            return this.marketplaceService.getPendingListing(listingId);
          });
          return combineLatest(listings$);
        }),
        map(payload => {
          return new fromProjects.PendingListingsLoaded({projects: payload});
        })
      )
    })
  )

  @Effect({dispatch: false})
  added$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_ADDED),
    map((action: fromProjects.ProjectAdded) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([payload, user]: any) => {
      const project: Listing = {...payload.project};

      if (!project.photoUrl) {
        project.photoUrl = DEFAULT_PHOTO_URL;
      }
      project.userId = user.uid;
      project.state = ListingState.PENDING;

      return this.projectsService.add(project);
    })
  );

  @Effect({dispatch: false})
  delete$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_DELETED),
    map((action: fromProjects.ProjectDeleted) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([payload]: any) => this.projectsService.delete(payload.project))
  );

  @Effect({dispatch: false})
  edit$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_EDITED),
    map((action: fromProjects.ProjectEdited) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([payload]: any) => this.projectsService.updateListing(payload.project))
  );

}
