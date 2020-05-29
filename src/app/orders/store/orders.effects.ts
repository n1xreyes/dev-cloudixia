import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOrders from './orders.actions';
import { LoadOrdersParams } from './orders.actions';
import { combineLatest, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OrdersService } from '../service/orders.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Order, OrdersSearchType, OrderWithUserProfiles } from '../../shared/models/order.model';
import { UserProfile } from '../../auth/models/user.model';

@Injectable()
export class OrdersEffects {

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
    private authService: AuthService,
  ) {}

  @Effect()
  ordersSearch$ = this.actions$.pipe(
    ofType(fromOrders.OrdersActionTypes.LoadOrders),
    switchMap((payload: fromOrders.LoadOrders) => {
      if (payload.payload.userId) {
        return of(payload.payload);
      } else {
        return this.authService.getAuthState().pipe(
          map(user => ({
            ...payload.payload,
            userId: user?.uid
          }))
        );
      }
    }),
    switchMap((payload: LoadOrdersParams) => {
      if (payload.userId) {
        return this.ordersService.findOrdersByBuyerId(payload.userId, payload.type).pipe(
          switchMap((data: Order[]) => {
            const orders$ = data.map((order: Order) => {
              const isSeller: boolean = payload.type === OrdersSearchType.SELLER;
              return this.authService.getDBUserProfile(isSeller ? order.buyerUid : order.sellerUid)
                .pipe(
                  map((user: UserProfile) => {
                    if (isSeller) {
                      (order as OrderWithUserProfiles).buyer = user;
                    } else {
                      (order as OrderWithUserProfiles).seller = user;
                    }
                    return order;
                  }),
                );
            });

            return combineLatest(orders$);
          }),
          map((data: OrderWithUserProfiles[]) => new fromOrders.LoadOrdersSuccess({ data }))
        );
      } else {
        // TODO: Throw error, so `catchError` will execute. And overall, we need to redirect somewhere, if user is not logged it.
        throw new Error('We are doomed.');
      }
    }),
    catchError(error => {
      return of(new fromOrders.LoadOrdersFailure({ error }));
    })
  );

}
