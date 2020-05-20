import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAdmin from './../store/admin.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { Listing } from 'src/app/shared/models/listing.model';
import { of, combineLatest } from 'rxjs';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import { CategoryService } from '../services/category.service';

@Injectable()
export class AdminEffects {

  constructor(
    private actions$: Actions,
    private adminService: AdminService,
    private marketplaceService: MarketplaceService,
    private categoryService: CategoryService,
  ) {}

  @Effect()
  getUsersList$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.GET_USERS_LIST),
    switchMap( () => this.adminService.getUsersList()
      .pipe(
        map( (users: any) => {
          const usersList: any[] = users.map((res: any) => {
            return { ...res.payload.val() };
          });
          return (new fromAdmin.UsersListFetched({ usersList }));
        }),
        catchError( (error: any) => of(new fromAdmin.AdminError({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  deleteUserProject$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.DELETE_PENDING_USER_PROJECT),
    map( (action: fromAdmin.DeletePendingUserProject) => action.payload),
    switchMap((payload: any) => this.adminService.deletePendingUserProject(payload.listingUID)
      .pipe(
        catchError((error: any) => of(new fromAdmin.AdminError({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  approveUserProject$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.APPROVE_USER_PROJECT),
    map((action: fromAdmin.ApproveUserProject) => action.payload),
    switchMap((payload: any) => this.adminService.approveUserProject(payload.listingUID)
      .pipe(
        catchError((error: any) => of(new fromAdmin.AdminError({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  addAdminPrivileges$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.ADD_ADMIN_PRIVILEGES),
    map( (action: fromAdmin.AddAdminPrivileges) => action.payload),
    switchMap( (payload: any) => this.adminService.addAdminPrivileges(payload.userId)
      .pipe(
        catchError( (error: any) => of(new fromAdmin.AdminError({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  removeAdminPrivileges$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.REMOVE_ADMIN_PRIVILEGES),
    map( (action: fromAdmin.RemoveAdminPrivileges) => action.payload),
    switchMap( (payload: any) => this.adminService.removeAdminPrivileges(payload.userId)
      .pipe(
        catchError( (error: any) => of(new fromAdmin.AdminError({ error })))
      )
    )
  );

  @Effect()
  getPendingListings$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.GET_PENDING_LISTINGS),
    switchMap(() =>
      this.marketplaceService.getPendingSearches()
        .pipe(
          map((data: any) => data.map((res: any) => ({ ...res.payload.val() }))),
          switchMap((listingPayload: Listing[]) => {
            const listing$ = listingPayload.map((listing) => {
              if (listing.categories && listing.categories.length) {
                return this.categoryService.get(listing.categories[0])
                  .pipe(
                    map((categoryPayload) => ({
                      listing,
                      category: categoryPayload.payload.val(),
                    })
                  ));
              } else {
                return of({ listing, category: null });
              }
            });

            return combineLatest(listing$);
          }),
          map((payload) => {
            const projects = payload.map(({ listing, category }) => ({
              ...listing,
              category
            }));
            return new fromAdmin.PendingListingsFetched({pendingListings: projects});
          }),
          catchError((error: any) => of(new fromAdmin.AdminError({ error })))
        )
    )
  );

}
