import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, combineLatest } from 'rxjs';
import * as fromMarketplace from './marketplace.actions';
import { MarketplaceActionTypes } from './marketplace.actions';
import { Listing, ListingAlgolia } from 'src/app/shared/models/listing.model';
import { MarketplaceService } from '../services/marketplace.service';
import { CategoryService } from 'src/app/admin/services/category.service';

@Injectable()
export class MarketplaceEffects {

  constructor(
    private actions$: Actions,
    private marketplaceService: MarketplaceService,
    private categoryService: CategoryService
  ) { }

  @Effect()
  marketplaceSearch$ = this.actions$.pipe(
    ofType(MarketplaceActionTypes.MARKETPLACE_SEARCH),
    switchMap((payload: fromMarketplace.MarketplaceSearch) =>
      this.marketplaceService.marketplaceListingSearch(payload.payload)
        .pipe(
          map((data: any) => data.hits.map((listing: ListingAlgolia) => new Listing(listing))),
          switchMap((listingPayload: Listing[]) => {
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

}
