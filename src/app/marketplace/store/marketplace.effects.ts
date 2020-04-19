import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromMarketplace from './marketplace.actions'
import { MarketplaceActionTypes } from './marketplace.actions';
import { Listing } from 'src/app/shared/models/listing.model';
import { MarketplaceService } from '../services/marketplace.service';

@Injectable()
export class MarketplaceEffects {

    constructor(
        private actions$: Actions,
        private marketplaceService: MarketplaceService,
    ) { }

    @Effect()
    marketplaceSearch$ = this.actions$.pipe(
        ofType(MarketplaceActionTypes.MARKETPLACE_SEARCH),
        switchMap( (payload: fromMarketplace.MarketplaceSearch) => {
            return this.marketplaceService.textSearch(payload.payload.query)
                .pipe(
                    map((data: any) => {
                        const projectsData: Listing[] = [];

                        // Algolia "SearchResponse" object, not actually a 'Listing"
                        data.hits.map( (listing: Listing) => {
                            projectsData.push(listing)
                        });

                        return (new fromMarketplace.MarketplaceLoaded({ listings: projectsData }));
                    }),
                    catchError(error => of(new fromMarketplace.MarketplaceError({ error })))
                );
        }),
    );

}
