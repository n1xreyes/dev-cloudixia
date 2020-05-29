import { orderStateInitial, OrdersState } from './orders.state';
import { OrdersActionTypes, OrdersActions } from './orders.actions';

export const orderFeatureKey = 'order';

export function ordersReducer(state = orderStateInitial, action: OrdersActions): OrdersState {
  switch (action.type) {
    case (OrdersActionTypes.LoadOrders): {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case (OrdersActionTypes.LoadOrdersSuccess): {
      return Object.assign({}, state, {
        ordersListing: action.payload.data,
        loading: false
      });
    }
    case (OrdersActionTypes.LoadOrdersFailure): {
      return Object.assign({}, state, {
        error: action.payload.error,
        loading: false
      });
    }
    default:
      return state;
  }
}
