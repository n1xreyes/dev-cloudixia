import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { MDBModalService } from 'angular-bootstrap-md';
import { take } from 'rxjs/operators';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { DEFAULT_MODAL_CONFIG, DELETE_CONFIRMATION } from 'src/app/core/service/util.service';
import { CategoryChildrenModalComponent } from '../../../admin/components/category-children-modal/category-children-modal.component';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input() entity: Category;
  @Input() editable: boolean;
  @Output() deleted = new EventEmitter<Category>();
  @Output() edited = new EventEmitter<Category>();

  constructor(
    public modalService: MDBModalService
  ) { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.modalService.show(ConfirmModalComponent, {...DEFAULT_MODAL_CONFIG, data: {
        ...DELETE_CONFIRMATION,
      }})
      ?.content.confirmation
      .pipe(take(1))
      .subscribe((confirmation: boolean) => {
        if (confirmation) {
          this.deleted.emit(this.entity);
        }
      });
  }

  onEdit(): void {
    this.edited.emit(this.entity);
  }

  onShowChildren(): void {
    this.modalService.show(CategoryChildrenModalComponent, {...DEFAULT_MODAL_CONFIG, data: {
      inputParent: this.entity
    }});
  }

}
