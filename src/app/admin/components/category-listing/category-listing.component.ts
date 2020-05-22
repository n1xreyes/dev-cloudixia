import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { MDBModalService } from 'angular-bootstrap-md';
import { take } from 'rxjs/operators';
import { CategoryModalComponent } from '../category-modal/category-modal.component';
import { DEFAULT_MODAL_CONFIG } from 'src/app/core/service/util.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  @Input() list: Category[];
  @Output() saved: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() deleted: EventEmitter<Category> = new EventEmitter<Category>();

  constructor(
    private modalService: MDBModalService,
  ) { }

  ngOnInit(): void { }

  trackByFunction(_index: number, element: Category): string {
    return element.uid;
  }

  openModal(entity: Category = new Category()): void {
    this.modalService
      .show(CategoryModalComponent, {...DEFAULT_MODAL_CONFIG, data: {
        entity: {...entity}
      }})
      .content.result
      .pipe(take(1))
      .subscribe((result: Category) => this.saved.emit(result));
  }

  onDeleted(entity: Category): void {
    this.deleted.emit(entity);
  }

}
