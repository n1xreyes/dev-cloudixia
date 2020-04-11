import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Store, select } from '@ngrx/store';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromMarketplace from './marketplace.actions'
import { AppState } from '../../reducers/index';
import { getUser } from '../../auth/store/auth.selectors';
import { MarketplaceActionTypes } from './marketplace.actions';
import { Listing } from 'src/app/shared/models/listing.model';
import { MarketplaceService } from '../services/marketplace.service';

@Injectable()
export class MarketplaceEffects {

    constructor(
        private actions$: Actions,
        private marketplaceService: MarketplaceService,
        private store: Store<AppState>
    ) { }

    @Effect()
    marketplaceQuery$ = this.actions$.pipe(
        ofType(MarketplaceActionTypes.MARKETPLACE_QUERY_ALL),
        withLatestFrom(this.store.pipe(select(getUser))),
        switchMap(([]: any) => {
            return this.marketplaceService.getAllListings()
                .pipe(
                    map((data: any) => {
                        const projectsData: Listing[] = [];
                        data.map((res: any) => {
                            projectsData.push({...res.payload.val()})
                        });
                        return (new fromMarketplace.MarketplaceLoaded({ projects: projectsData }));
                    }),
                    catchError(error => of(new fromMarketplace.MarketplaceError({ error })))
                );
        }),
    );

}
