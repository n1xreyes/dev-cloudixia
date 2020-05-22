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

@Injectable()
export class ProjectsEffects {

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<AppState>,
    private authService: AuthService,
    private marketplaceService: MarketplaceService,
    private categoryService: CategoryService,
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
    map(([payload]: any) => this.projectsService.updateListing(payload.project))
  );

}
