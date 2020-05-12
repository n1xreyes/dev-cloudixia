import { NgModule/*, ComponentFactoryResolver*/ } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MarketplaceComponent } from './components/marketplace.component';
import { WavesModule, ModalModule } from 'angular-bootstrap-md';
import * as fromMarketplace from './store/marketplace.reducer';
import { MarketplaceEffects } from './store/marketplace.effects';
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
    // angular
    HttpClientModule,
    // ngrx
    StoreModule.forFeature('marketplace', fromMarketplace.marketplaceReducer),
    EffectsModule.forFeature([MarketplaceEffects]),
    // mdb
    ModalModule,
    WavesModule,
    // custom
    SharedModule,
    MarketplaceRoutingModule
  ],
  declarations: [
    MarketplaceComponent,
    MarketplaceListingComponent,
    ListingOverviewCardComponent,
    ListingDetailsComponent,
    UserProfileComponent,
    UserProfileUserComponent,
    UserProfileListingsComponent
  ],
  exports: [MarketplaceComponent],
})
export class MarketplaceModule {}
