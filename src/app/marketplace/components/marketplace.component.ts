import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getAllLoaded, getProjects } from '../store/marketplace.selectors';
import { AppState } from 'src/app/reducers';
import { Listing } from 'src/app/shared/models/listing.model';
import * as fromMarketplace from '../store/marketplace.actions'

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
