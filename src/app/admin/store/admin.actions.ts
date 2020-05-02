import { Action } from '@ngrx/store';

export enum AdminActionTypes {
  GET_USERS_LIST = '[Admin] Get Users List',
  USERS_LIST_FETCHED = '[Admin] Users list fetched',
  
  GET_PENDING_LISTINGS = '[Admin] Get Pending Services List',
  PENDING_LISTINGS_FETCHED = '[Admin] Pending Services Fetched',
  DELETE_PENDING_USER_PROJECT = '[Admin] Delete pending user project',
  APPROVE_USER_PROJECT = '[Admin] Approve user project',

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

export class DeletePendingUserProject implements Action {
  readonly type = AdminActionTypes.DELETE_PENDING_USER_PROJECT;

  constructor(public payload: { listingUID: string}) {}
}

export class ApproveUserProject implements Action {
  readonly type = AdminActionTypes.APPROVE_USER_PROJECT;

  constructor(public payload: { listingUID: string}) {}
}
export class AddAdminPrivileges implements Action {
  readonly type = AdminActionTypes.ADD_ADMIN_PRIVILEGES;

  constructor(public payload: { userId: string }) {}
}

export class RemoveAdminPrivileges implements Action {
  readonly type = AdminActionTypes.REMOVE_ADMIN_PRIVILEGES;

  constructor(public payload: { userId: string }) {}
}

export class GetPendingListings implements Action {
  readonly type = AdminActionTypes.GET_PENDING_LISTINGS;
}

export class PendingListingsFetched implements Action {
  readonly type = AdminActionTypes.PENDING_LISTINGS_FETCHED;

  constructor(public payload: { pendingListings: any[]}) {}
}

export class AdminError implements Action {
  readonly type = AdminActionTypes.ADMIN_ERROR;

  constructor(public payload: { error: any }) {}
}

export type AdminActions =
  | GetUsersList
  | UsersListFetched
  | DeletePendingUserProject
  | AddAdminPrivileges
  | RemoveAdminPrivileges
  | GetPendingListings
  | PendingListingsFetched
  | AdminError;
