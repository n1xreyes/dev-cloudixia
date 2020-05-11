import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './components/marketplace.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: MarketplaceComponent },
  { path: 'listing/:id', component: ListingDetailsComponent },
  { path: 'user/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule {}
