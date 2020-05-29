import { Order } from '../../shared/models/order.model';

export interface OrdersState {
  ordersListing: Order[] | null;
  loading: boolean;
  error: any;
}

export const orderStateInitial: OrdersState = {
  ordersListing: null,
  loading: false,
  error: null,
};
