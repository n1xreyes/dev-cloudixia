import { Component, OnInit } from '@angular/core';
import * as fromMarketplace from './store/marketplace.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getAllLoaded, getProjects } from './store/marketplace.selectors';
import { Listing } from '../shared/models/listing.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  projects$: Observable<Listing[] | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getAllLoaded);
    this.projects$ = this.store.pipe(
      select(getProjects),
      map( (projects: Listing[]) => {
        if (!projects) {
          this.store.dispatch(new fromMarketplace.MarketplaceQueryAll());
        }
        return projects;
      })
    );
  }

}
