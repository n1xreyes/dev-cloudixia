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
import { ProjectsService } from 'src/app/projects/services/projects.service';

@Injectable()
export class MarketplaceEffects {

    constructor(
        private actions$: Actions,
        private projectsService: ProjectsService,
        private store: Store<AppState>
    ) { }

    @Effect()
    marketplaceQuery$ = this.actions$.pipe(
        ofType(MarketplaceActionTypes.MARKETPLACE_QUERY_ALL),
        withLatestFrom(this.store.pipe(select(getUser))),
        switchMap(([]: any) => {

            return this.projectsService.getAllProjects()
                .pipe(
                    map((data: any) => {
                        const projectsData: Project[] = [];
                        data.map((res: any) => {
                            const userKey = res.payload.key;
                            const userProjects = res.payload.val();
                            for (var prop in userProjects) {
                                if (Object.prototype.hasOwnProperty.call(userProjects, prop)) {
                                    projectsData.push({
                                        key: prop || userKey || null,
                                        title: userProjects[prop].title || null,
                                        description: userProjects[prop].description || null,
                                        photoUrl: userProjects[prop].photoUrl || null
                                    })
                                }
                            }
                        });
                        return (new fromMarketplace.MarketplaceLoaded({ projects: projectsData }));
                    }),
                    catchError(error => of(new fromMarketplace.MarketplaceError({ error })))
                );
        }),
    );

}
