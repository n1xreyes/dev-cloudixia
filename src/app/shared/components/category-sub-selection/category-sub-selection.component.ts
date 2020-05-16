import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-sub-selection',
  templateUrl: './category-sub-selection.component.html',
  styleUrls: ['./category-sub-selection.component.css']
})
export class CategorySubSelectionComponent implements OnInit {

  @Input() items: Category[];
  @Input() value: Category;

  @Output() setValue: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() { }

  ngOnInit(): void {
  }

  trackByFunction(_index: number, element: Category): string {
    return element.uid;
  }

  getSubcategories(item: Category): Category[] | undefined {
    return item.subCategories && Object.values(item.subCategories);
  }

  _setValue(item: Category): void {
    this.setValue.emit(item);
  }

}
