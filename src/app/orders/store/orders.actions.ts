import { Action } from '@ngrx/store';
import { OrderWithUserProfiles, OrdersSearchType } from 'src/app/shared/models/order.model';

export interface LoadOrdersParams {
  type: OrdersSearchType;
  userId?: string;
}

export enum OrdersActionTypes {
  LoadOrders = '[Orders] Load Orderss',
  LoadOrdersSuccess = '[Orders] Load Orderss Success',
  LoadOrdersFailure = '[Orders] Load Orderss Failure',
}

export class LoadOrders implements Action {
  readonly type = OrdersActionTypes.LoadOrders;

  constructor(public payload: LoadOrdersParams) { }
}

export class LoadOrdersSuccess implements Action {
  readonly type = OrdersActionTypes.LoadOrdersSuccess;
  constructor(public payload: { data: OrderWithUserProfiles[] }) { }
}

export class LoadOrdersFailure implements Action {
  readonly type = OrdersActionTypes.LoadOrdersFailure;
  constructor(public payload: { error: any }) { }
}

export type OrdersActions = LoadOrders | LoadOrdersSuccess | LoadOrdersFailure;

