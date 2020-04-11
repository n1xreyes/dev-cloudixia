import { Action } from '@ngrx/store';
import { Listing } from 'src/app/shared/models/listing.model';

export enum AdminActionTypes {
  GET_USERS_LIST = '[Admin] Get Users List',
  USERS_LIST_FETCHED = '[Admin] Users list fetched',

  GET_USER_PROJECTS = '[Admin] Get user projects',
  USERS_PROJECTS_LOADED = '[Admin] User projects loaded',
  DELETE_USER_PROJECT = '[Admin] Delete user project',

  ADD_ADMIN_PRIVILEGES = '[Admin] Add admin privileges',
  REMOVE_ADMIN_PRIVILEGES = '[Admin] Remove admin privileges',

  ADMIN_ERROR = '[Admin] Error'
}

export class GetUsersList implements Action {
  readonly type = AdminActionTypes.GET_USERS_LIST;
}

export class UsersListFetched implements Action {
  readonly type = AdminActionTypes.USERS_LIST_FETCHED;

  constructor(public payload: { usersList: any[] }) {}
}

export class GetUserProjects implements Action {
  readonly type = AdminActionTypes.GET_USER_PROJECTS;

  constructor(public payload: { uid: string }) {}
}

export class DeleteUserProject implements Action {
  readonly type = AdminActionTypes.DELETE_USER_PROJECT;

  constructor(public payload: { userId: string, projectId: string}) {}
}

export class UserProjectsLoaded implements Action {
  readonly type = AdminActionTypes.USERS_PROJECTS_LOADED;

  constructor(public payload: { uid: string, userProjects: Listing[] }) {}
}

export class AddAdminPrivileges implements Action {
  readonly type = AdminActionTypes.ADD_ADMIN_PRIVILEGES;

  constructor(public payload: { userId: string }) {}
}

export class RemoveAdminPrivileges implements Action {
  readonly type = AdminActionTypes.REMOVE_ADMIN_PRIVILEGES;

  constructor(public payload: { userId: string }) {}
}

export class AdminError implements Action {
  readonly type = AdminActionTypes.ADMIN_ERROR;

  constructor(public payload: { error: any }) {}
}

export type AdminActions =
  | GetUsersList
  | UsersListFetched
  | GetUserProjects
  | UserProjectsLoaded
  | DeleteUserProject
  | AddAdminPrivileges
  | RemoveAdminPrivileges
  | AdminError;
