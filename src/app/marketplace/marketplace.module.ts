import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';




import { ButtonsModule, InputsModule, CardsModule, WavesModule, IconsModule, ModalModule } from 'angular-bootstrap-md';

import * as fromMarketplace from './store/marketplace.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MarketplaceEffects } from './store/marketplace.effects';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MarketplaceRoutingModule } from './marketplace-routing';



@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    SharedModule,
    HttpClientModule,
    MarketplaceRoutingModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    WavesModule,
    IconsModule,
    CardsModule,
    StoreModule.forFeature('marketplace', fromMarketplace.marketplaceReducer),
    EffectsModule.forFeature([MarketplaceEffects])
  ],
  declarations: [MarketplaceComponent],
  exports: [MarketplaceComponent],
})
export class MarketplaceModule { }
