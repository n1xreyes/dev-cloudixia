import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  trackByFunction(_index: number, element: Category): string {
    return element.uid;
  }

  onClick(entity?: Category): void {
    if (entity && entity.subCategories) {
      this.breadcrumbs.push(entity);
      this.currentItems = Object.values(entity.subCategories);
    }

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
