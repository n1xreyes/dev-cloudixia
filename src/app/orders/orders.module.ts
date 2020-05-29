import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './store/orders.effects';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { TableModule } from 'angular-bootstrap-md';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderCardComponent,
    OrderDetailsComponent
  ],
  imports: [
    OrdersRoutingModule,
    CommonModule,
    SharedModule,
    TableModule,
    EffectsModule.forFeature([OrdersEffects]),
  ],
})
export class OrdersModule { }
