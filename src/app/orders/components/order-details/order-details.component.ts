import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderWithUserProfiles } from '../../../shared/models/order.model';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../service/orders.service';
import { UserProfile } from '../../../auth/models/user.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  order: OrderWithUserProfiles;
  hideSeller = false;
  hideBuyer = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private ordersService: OrdersService,
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activeRoute.params.subscribe({
        next: (params: Params) => {
          this.ordersService.findOrderById(params.id).subscribe((order: OrderWithUserProfiles) => {
            this.order = order;
          });
        }
      }),
      this.activeRoute.url.subscribe({
        next: (segments: UrlSegment[]) => {
          this.hideBuyer = segments[0].path === 'buyer';
          this.hideSeller = segments[0].path === 'seller';
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  openUserProfile(userProfile: UserProfile): void {
    console.log(userProfile);
  }

}
