import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { getOrdersListLoading, getOrdersList } from '../../store/order.selectors';
import { delay } from 'rxjs/operators';
import { LoadOrders } from '../../store/orders.actions';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { OrdersSearchType, OrderWithUserProfiles } from '../../../shared/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {

  orders$: Observable<OrderWithUserProfiles[] | null>;
  isLoading$: Observable<boolean>;
  isSeller: boolean;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activeRoute.url.subscribe((segments: UrlSegment[]) => {
        this.isSeller = segments[0] && segments[0].path  === 'seller';
        this.store.dispatch(new LoadOrders({
          type: this.isSeller ? OrdersSearchType.SELLER : OrdersSearchType.BUYER,
          userId: segments[1] ? segments[1].path : undefined
        }));
      })
    );

    this.isLoading$ = this.store.select(getOrdersListLoading)
      .pipe(delay(0));

    this.orders$ = this.store.pipe(
      select(getOrdersList)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  navigate(order: OrderWithUserProfiles): void {
    this.router.navigate([`${this.isSeller ? 'seller' : 'buyer'}/orderDetail/${order.uid}`], { relativeTo: this.activeRoute.parent });
  }

}
