import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { getAllLoaded, GetListings } from '../store/marketplace.selectors';
import { AppState } from 'src/app/reducers';
import { Listing } from 'src/app/shared/models/listing.model';
import * as fromMarketplace from '../store/marketplace.actions';
import { categories, Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  categories: Category[] = categories;

  listings$: Observable<Listing[] | null>;
  isLoading$: Observable<boolean>;

  form: FormGroup = new FormGroup({
    query: new FormControl(''),
    categories: new FormControl([]),
  });

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // sets an initial delay so the front end will stop bitching
    this.isLoading$ = this.store.select(getAllLoaded).pipe(
      delay(0)
    );

    this.listings$ = this.store.pipe(
      select(GetListings),
      map((listings: Listing[]) => {
        if (!listings) {
          this.store.dispatch(new fromMarketplace.MarketplaceSearch(this.form.value));
        }
        return listings;
      })
    );
  }

  smashTheSearch(): void {
    this.store.dispatch(new fromMarketplace.MarketplaceSearch(this.form.value));
  }

}
