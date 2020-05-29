import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of, combineLatest } from 'rxjs';
import * as fromMarketplace from './marketplace.actions';
import { MarketplaceActionTypes } from './marketplace.actions';
import { Listing, ListingAlgolia } from 'src/app/shared/models/listing.model';
import { MarketplaceService } from '../services/marketplace.service';
import { CategoryService } from 'src/app/admin/services/category.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { OrdersService } from 'src/app/orders/service/orders.service';

@Injectable()
export class MarketplaceEffects {

  constructor(
    private actions$: Actions,
    private marketplaceService: MarketplaceService,
    private categoryService: CategoryService,
    private authService: AuthService,
    private orderService: OrdersService
  ) { }

  @Effect()
  marketplaceSearch$ = this.actions$.pipe(
    ofType(MarketplaceActionTypes.MARKETPLACE_SEARCH),
    switchMap((payload: fromMarketplace.MarketplaceSearch) =>
      this.marketplaceService.marketplaceListingSearch(payload.payload)
        .pipe(
          map((data: any) => data.hits.map((listing: ListingAlgolia) => new Listing(listing))),
          switchMap((listingPayload: Listing[]) => {
            if (listingPayload && listingPayload.length) {
              const listing$ = listingPayload.map((listing: Listing) => {
                if (listing.categories && listing.categories.length) {
                  return this.categoryService.get(listing.categories[0])
                    .pipe(
                      map((categoryPayload) => {
                        return {
                          listing,
                          category: categoryPayload.payload.data()
                        };
                      })
                    );
                } else {
                  return of({ listing, category: null });
                }
              });

              return combineLatest(listing$);
            } else {
              return of([]);
            }
          }),
          map((resultPayload) => {
            const projects = resultPayload.map(({ listing, category }) => ({
              ...listing,
              category
            }));
            return new fromMarketplace.MarketplaceLoaded({ listings: projects });
          }),
          catchError(error => of(new fromMarketplace.MarketplaceError({ error })))
        )
    ),
  );

  @Effect({dispatch: false})
  marketplacePurchase$ = this.actions$.pipe(
    ofType(MarketplaceActionTypes.MARKETPLACE_PURCHASE),
    map((action: fromMarketplace.MarketplacePurchase) => action.payload),
    withLatestFrom(this.authService.getAuthState()),
    map(([payload, user]) => {
      if (user) {
        return this.orderService.purchase(payload.listing, user.uid);
      } else {
        // TODO: Throw error, so `catchError` will execute. And overall, we need to redirect somewhere, if user is not logged it.
        throw new Error('We are doomed.');
      }
    }),
    // TODO: since `dispatch: false` this won't have any effect. Lol.
    catchError(error => of(new fromMarketplace.MarketplaceError({ error })))
  );

}
