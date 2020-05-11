import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './components/marketplace.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';




import { ButtonsModule, InputsModule, CardsModule, WavesModule, IconsModule, ModalModule } from 'angular-bootstrap-md';

import * as fromMarketplace from './store/marketplace.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MarketplaceEffects } from './store/marketplace.effects';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MarketplaceRoutingModule } from './marketplace-routing';
import { MarketplaceListingComponent } from './components/marketplace-listing/marketplace-listing.component';
import { ListingOverviewCardComponent } from './components/listing-overview-card/listing-overview-card.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileUserComponent } from './components/user-profile/user-profile-user/user-profile-user.component';
import { UserProfileListingsComponent } from './components/user-profile/user-profile-listings/user-profile-listings.component';

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
  declarations: [MarketplaceComponent, MarketplaceListingComponent, ListingOverviewCardComponent, ListingDetailsComponent, UserProfileComponent, UserProfileUserComponent, UserProfileListingsComponent],
  exports: [MarketplaceComponent],
})
export class MarketplaceModule { }
