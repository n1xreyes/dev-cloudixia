import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

export const getOrdersState = (state: AppState) => state.orders;

export const getOrdersList = createSelector(
  getOrdersState,
  orders => orders.ordersListing
);

export const getOrdersListLoading = createSelector(
  getOrdersState,
  orders => orders.loading
);
