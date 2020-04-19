import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getAllLoaded, GetListings } from '../store/marketplace.selectors';
import { AppState } from 'src/app/reducers';
import { Listing } from 'src/app/shared/models/listing.model';
import * as fromMarketplace from '../store/marketplace.actions'

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  listings$: Observable<Listing[] | null>;
  isLoading$: Observable<boolean>;

  query: string = "";

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getAllLoaded);

    this.listings$ = this.store.pipe(
      select(GetListings),
      map((listings: Listing[]) => {
        if (!listings) {
          this.store.dispatch(new fromMarketplace.MarketplaceSearch({ query: this.query }));
        }
        return listings;
      })
    );
  }

  smashTheSearch() {
    this.store.dispatch(new fromMarketplace.MarketplaceSearch({ query: this.query }));
  }

}
