import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category.model';
import { getCategoryList } from 'src/app/admin/store/category.selectors';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import * as fromCategory from '../../../admin/store/category.actions';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  // Input
  entity: Listing;

  categories$: Observable<Category[] | null>;
  result: Subject<Listing> = new Subject<Listing>();

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categories: new FormControl([], Validators.required),
    photoUrl: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0.01)])
  });

  constructor(
    public store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.categories$ = this.store.pipe(
      select(getCategoryList),
      map((categories: Category[]) => {
        if (!categories) {
          this.store.dispatch(new fromCategory.GetCategoryList());
        }
        return categories;
      })
    );
  }

}
