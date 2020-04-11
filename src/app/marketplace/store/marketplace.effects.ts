import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Store, select } from '@ngrx/store';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromMarketplace from './marketplace.actions'
import { AppState } from '../../reducers/index';
import { getUser } from '../../auth/store/auth.selectors';
import { MarketplaceActionTypes } from './marketplace.actions';
import { Project } from 'src/app/projects/models/project.model';
import { MarketplaceService } from '../marketplace-service.service';

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
                        const projectsData: Project[] = [];
                        data.map((res: any) => {
                            const projectKey: string = res.payload.key;
                            const project: Project = res.payload.val();
                            projectsData.push({
                                key: projectKey || null,
                                title: project.title || undefined,
                                description: project.description || undefined,
                                photoUrl: project.photoUrl || undefined
                            })
                        });
                        return (new fromMarketplace.MarketplaceLoaded({ projects: projectsData }));
                    }),
                    catchError(error => of(new fromMarketplace.MarketplaceError({ error })))
                );
        }),
    );

}
