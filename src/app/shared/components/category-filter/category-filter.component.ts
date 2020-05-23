import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';
import { Observable } from 'rxjs';
import { Language } from '../../models/language.enum';
import { getLanguage } from 'src/app/auth/store/auth.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  language$: Observable<Language>;

  private _items: Category[];
  @Input()
  get items(): Category[] {
    return this._items;
  }
  set items(items: Category[]) {
    this._items = items;
    if (!this.breadcrumbs.length) {
      this.currentItems = items;
    }
  }

  @Output() selected: EventEmitter<Category | undefined> = new EventEmitter<Category | undefined>();

  currentItems: Category[];
  breadcrumbs: Category[] = [];
  _selected: Category;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.language$ = this.store.select(getLanguage);
  }

  trackByFunction(_index: number, element: Category): string {
    return element.uid;
  }

  onClick(entity: Category): void {
    if (entity && entity.subCategories) {
      this.breadcrumbs.push(entity);
      this.currentItems = Object.values(entity.subCategories);
    }

    this._selected = entity;
    this.selected.emit(entity);
  }

  goByIndex(index: number): void {
    if (index < 0) {
      this.currentItems = this._items;
      this.breadcrumbs = [];
      this.selected.emit(undefined);
    } else {
      const parent: Category = this.breadcrumbs[index];
      this.currentItems = Object.values(parent.subCategories || {});
      this.breadcrumbs.splice(index + 1);
      this.selected.emit(parent);
    }
  }

}
