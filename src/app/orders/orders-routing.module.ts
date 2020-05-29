import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminGuard } from '../admin/guard/admin.guard';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  // TODO: add Buyer/Seller Guard
  {
    path: 'seller',
    component: OrdersComponent,
  },
  {
    path: 'buyer',
    component: OrdersComponent,
  },
  {
    path: 'seller/orderDetail/:id',
    component: OrderDetailsComponent
  },
  {
    path: 'buyer/orderDetail/:id',
    component: OrderDetailsComponent
  },
  {
    path: 'seller/:id',
    component: OrdersComponent,
    canActivate: [ AdminGuard ]
  },
  {
    path: 'buyer/:id',
    component: OrdersComponent,
    canActivate: [ AdminGuard ],
  },
  {
    path: 'orderDetail/:id',
    component: OrderDetailsComponent,
    canActivate: [ AdminGuard ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
