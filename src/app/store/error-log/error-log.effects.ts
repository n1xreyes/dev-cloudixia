import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { OrdersActionTypes } from '../../orders/store/orders.actions';
import { MarketplaceActionTypes } from '../../marketplace/store/marketplace.actions';
import { CategoryActionTypes } from '../../admin/store/category.actions';
import { AdminActionTypes } from '../../admin/store/admin.actions';
import { AuthActionTypes } from '../../auth/store/auth.actions';
import { ProjectsActionTypes } from '../../manage-listings/store/projects.actions';

@Injectable()
export class ErrorLogEffects {

  constructor(private actions$: Actions) {}

  @Effect({dispatch: false})
  log$ = this.actions$.pipe(
    ofType(
      OrdersActionTypes.LoadOrdersFailure,
      MarketplaceActionTypes.MARKETPLACE_ERROR,
      CategoryActionTypes.CATEGORY_ERROR,
      AdminActionTypes.ADMIN_ERROR,
      AuthActionTypes.AUTH_ERROR,
      ProjectsActionTypes.PROJECTS_ERROR
    ),
    map((errorPayload) => {
      console.error(errorPayload);
    })
  );

}
