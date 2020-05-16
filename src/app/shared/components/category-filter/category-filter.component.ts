import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  _items: Category[];
  @Input()
  get items(): Category[] {
    return this._items;
  }
  set items(items: Category[]) {
    this._items = items;
    if (!this.subGroupShown) {
      this.currentItems = items;
    }
  }

  @Output() selected: EventEmitter<Category> = new EventEmitter<Category>();

  currentItems: Category[];

  private subGroupShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFunction(_index: number, element: Category): string {
    return element.uid;
  }

  onClick(entity: Category): void {
    if (entity.subCategories) {
      this.currentItems = Object.values(entity.subCategories);
      this.subGroupShown = true;
    }

    this.selected.emit(entity);
  }

}
