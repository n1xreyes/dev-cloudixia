import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProjectsActionTypes } from './projects.actions';
import { Store, select } from '@ngrx/store';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectsService } from '../services/projects.service';

import * as fromProjects from './projects.actions';
import { AppState } from '../../reducers/index';
import { getUser } from '../../auth/store/auth.selectors';
import { Listing } from 'src/app/shared/models/listing.model';

@Injectable()
export class ProjectsEffects {

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<AppState>) {}

  // TODO: replace with a non-shitty way to do this instead of searching the entire effing database
  @Effect()
  query$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECTS_QUERY),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([, user]: any) => {
      return this.projectsService.getAllListings()
      .pipe(
        map((data: any) => {

          const listings: Listing[] = data.map((res: any) => {  
            return Object.assign({}, res.payload.val())
          }).filter( (project: Listing) => {
            return project.userId == user.uid
          })

          return (new fromProjects.ProjectsLoaded({ projects: listings }));

        }),
        catchError(error => of(new fromProjects.ProjectsError({ error })))
      );
    }),
  );

  @Effect({ dispatch: false })
  added$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_ADDED),
    map((action: fromProjects.ProjectDeleted) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload, user]: any) => {
      let project: Listing = {...payload.project}
      project.userId = user.uid;

      // fake data below
      if (!project.photoUrl) project.photoUrl = "https://1m19tt3pztls474q6z46fnk9-wpengine.netdna-ssl.com/wp-content/themes/unbound/images/No-Image-Found-400x264.png"
      project.price = '$' + Math.round(Math.random()*100) + '.' + Math.round(Math.random()*100)
      project.description = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
      // end fake data

      return this.projectsService.add(project)
      })
  );

  @Effect({ dispatch: false })
  delete$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_DELETED),
    map((action: fromProjects.ProjectDeleted) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload]: any) => this.projectsService.delete(payload.project))
  );

  @Effect({ dispatch: false })
  edit$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_EDITED),
    map((action: fromProjects.ProjectEdited) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload]: any) => {
      return this.projectsService.updateListing(payload.project)
    }
    )
  );

}
