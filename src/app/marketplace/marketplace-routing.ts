import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

const routes: Routes = [
  { path: '', component: MarketplaceComponent },
  { path: 'listing/:id', component: ListingDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule {}
