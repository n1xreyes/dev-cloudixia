import { Component, OnInit } from '@angular/core';
import * as fromMarketplace from './store/marketplace.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { Observable } from 'rxjs';
import { Project } from '../projects/models/project.model';
import { map } from 'rxjs/operators';
import { getAllLoaded, getProjects } from './store/marketplace.selectors';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  projects$: Observable<Project[] | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getAllLoaded);
    this.projects$ = this.store.pipe(
      select(getProjects),
      map( (projects: Project[]) => {
        if (!projects) {
          this.store.dispatch(new fromMarketplace.MarketplaceQueryAll());
        }
        return projects;
      })
    );
  }

}
