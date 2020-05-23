import { Action } from '@ngrx/store';
import { Listing } from 'src/app/shared/models/listing.model';

export enum ProjectsActionTypes {
  PROJECTS_QUERY = '[Projects] Projects query',
  PROJECTS_QUERY_ALL = '[Projects] Projects query all',

  MY_PENDING_LISTINGS_QUERY = '[Listings] Querying My pending listings',
  MY_PENDING_LISTINGS_LOADED = '[Listings] My Pending Listings Loaded',

  PROJECTS_LOADED = '[Projects] Projects loaded',
  PROJECT_CHANGED = '[Projects] Projects changed',

  PROJECT_ADDED = '[Projects] Listing added',

  PROJECT_EDITED = '[Projects] Listing edited',
  PROJECT_DELETED = '[Projects] Listing deleted',

  PROJECTS_ERROR = '[Projects] Projects error'
}

export class ProjectsQuery implements Action {
  readonly type = ProjectsActionTypes.PROJECTS_QUERY;
}

export class ProjectsQueryAll implements Action {
  readonly type = ProjectsActionTypes.PROJECTS_QUERY_ALL;
}

export class ProjectsLoaded implements Action {
  readonly type = ProjectsActionTypes.PROJECTS_LOADED;

  constructor(public payload: { projects: Listing[] }) {}
}

export class MyPendingListingsQuery implements Action {
  readonly type = ProjectsActionTypes.MY_PENDING_LISTINGS_QUERY;
}

export class PendingListingsLoaded implements Action {
  readonly type = ProjectsActionTypes.MY_PENDING_LISTINGS_LOADED;

  constructor(public payload: { projects: Listing[] }) {}
}

export class ProjectChanged implements Action {
  readonly type = ProjectsActionTypes.PROJECT_CHANGED;

  constructor(public payload: { project: Listing, action: string }) {}
}

export class ProjectAdded implements Action {
  readonly type = ProjectsActionTypes.PROJECT_ADDED;

  constructor(public payload: { project: Listing, file?: File}) {}
}

export class ProjectEdited implements Action {
  readonly type = ProjectsActionTypes.PROJECT_EDITED;

  constructor(public payload: { project: Listing, file?: File}) {}
}

export class ProjectDeleted implements Action {
  readonly type = ProjectsActionTypes.PROJECT_DELETED;

  constructor(public payload: { project: Listing }) {}
}

export class ProjectsError implements Action {
  readonly type = ProjectsActionTypes.PROJECTS_ERROR;

  constructor(public payload: { error: any }) {}
}

export type ProjectsActions =
  | ProjectsQuery
  | ProjectsQueryAll
  | ProjectsLoaded
  | MyPendingListingsQuery
  | PendingListingsLoaded
  | ProjectChanged
  | ProjectAdded
  | ProjectEdited
  | ProjectDeleted
  | ProjectsError;
