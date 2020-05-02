import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProjectsActionTypes } from './projects.actions';
import { Store, select } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';
import { ProjectsService } from '../services/projects.service';

import * as fromProjects from './projects.actions';
import { AppState } from '../../reducers/index';
import { getUser } from '../../auth/store/auth.selectors';
import { Listing } from 'src/app/shared/models/listing.model';
import { ListingState } from 'src/app/shared/models/listing-state.enum';

@Injectable()
export class ProjectsEffects {

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<AppState>) {}

  @Effect({ dispatch: false })
  query$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECTS_QUERY),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([, user]: any) => {
      this.projectsService.getUserListings(user.uid)
    })
  )

  @Effect({dispatch: false})
  added$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.PROJECT_ADDED),
    map((action: fromProjects.ProjectAdded) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    map(([payload, user]: any) => {
      let project: Listing = {...payload.project}
      
      if (!project.photoUrl) project.photoUrl = "https://1m19tt3pztls474q6z46fnk9-wpengine.netdna-ssl.com/wp-content/themes/unbound/images/No-Image-Found-400x264.png"
      project.userId = user.uid;
      project.state = ListingState.PENDING

      return this.projectsService.add(project)
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
