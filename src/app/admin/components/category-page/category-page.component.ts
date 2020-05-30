import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Category, CategoryWithPhoto} from 'src/app/shared/models/category.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getCategoryListLoading, getCategoryList } from '../../store/category.selectors';
import * as fromCategory from '../../store/category.actions';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  categoryList$: Observable<Category[] | null>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getCategoryListLoading);
    this.categoryList$ = this.store.select(getCategoryList);
    this.store.dispatch(new fromCategory.GetCategoryList());
  }

  onSaved(entity: CategoryWithPhoto): void {
        this.store.dispatch(!!entity.uid
          ? new fromCategory.CategoryEdited({ entity })
          : new fromCategory.CategoryAdded({ entity }));
  }

  onDeleted(entity: Category): void {
    this.store.dispatch(new fromCategory.CategoryDeleted({ entity }));
  }

}
