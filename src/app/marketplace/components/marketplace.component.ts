import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { getAllLoaded, GetListings } from '../store/marketplace.selectors';
import { AppState } from 'src/app/reducers';
import { ListingWithCategory } from 'src/app/shared/models/listing.model';
import { Category } from 'src/app/shared/models/category.model';
import { getCategoryList } from 'src/app/admin/store/category.selectors';
import { MarketplaceSearch } from '../store/marketplace.actions';
import { GetCategoryList } from 'src/app/admin/store/category.actions';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  form: FormGroup = new FormGroup({
    query: new FormControl('')
  });

  categories$: Observable<Category[] | null>;
  listings$: Observable<ListingWithCategory[] | null>;
  isLoading$: Observable<boolean>;

  selectedCategory: Category | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // sets an initial delay so the front end will stop bitching
    this.isLoading$ = this.store.select(getAllLoaded).pipe(
      delay(0)
    );

    this.listings$ = this.store.pipe(
      select(GetListings),
      map((listings: ListingWithCategory[]) => {
        if (!listings) {
          this.store.dispatch(new MarketplaceSearch(this.form.value));
        }
        return listings;
      })
    );

    this.categories$ = this.store.pipe(
      select(getCategoryList),
      map((categories: Category[]) => {
        if (!categories) {
          this.store.dispatch(new GetCategoryList());
        }
        return categories;
      })
    );
  }

  selectCategory(category?: Category): void {
    this.selectedCategory = category;
    this.smashTheSearch();
  }

  smashTheSearch(): void {
    this.store.dispatch(new MarketplaceSearch({
      ...this.form.value,
      category: this.selectedCategory,
    }));
  }

}
