import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { MDBModalRef } from 'angular-bootstrap-md';
import * as fromCategory from '../../store/category.actions';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { DEFAULT_PHOTO_URL } from 'src/app/core/service/util.service';
import { CategoryService } from '../../services/category.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-children-modal',
  templateUrl: './category-children-modal.component.html',
  styleUrls: ['./category-children-modal.component.css']
})
export class CategoryChildrenModalComponent implements OnInit {

  private superParent: Category;
  private immediatedParent: Category;

  inputParent: Category;
  list$: Observable<Category[]>;

  constructor(
    public modalRef: MDBModalRef,
    private store: Store<AppState>,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.list$ = this.categoryService.getSuperParent(this.inputParent)
      .pipe(
        map(({ payload }) => {
          this.superParent = payload.val();
          this.immediatedParent = this.getImmediateParent(this.superParent, this.inputParent);
          return (this.immediatedParent && this.immediatedParent.subCategories && Object.values(this.immediatedParent.subCategories)) || [];
        })
      );
  }

  onSaved(entity: Category): void {
    if (!entity.photoUrl) {
      entity.photoUrl = DEFAULT_PHOTO_URL;
    }

    if (!entity.uid) {
      const newUid: string = this.categoryService.getNewUid();
      entity.uid = newUid;
      entity.parentPath = (this.immediatedParent.parentPath || '')
        + (this.immediatedParent.parentPath ? Category.PARENT_PATH_SEPARATOR : '')
        + this.immediatedParent.uid;
    }

    if (!this.immediatedParent.subCategories) {
      this.immediatedParent.subCategories = {};
    }

    this.immediatedParent.subCategories[entity.uid || ''] = entity;

    this.store.dispatch(new fromCategory.CategoryEdited({ entity: this.superParent }));
  }

  onDeleted(entity: Category): void {
    if (this.immediatedParent.subCategories) {
      const match: string | undefined = Object.keys(this.immediatedParent.subCategories)
        .find((key: string) => key === entity.uid);
      if (match) {
        delete this.immediatedParent.subCategories[match];
        this.store.dispatch(new fromCategory.CategoryEdited({ entity: this.superParent }));
      }
    }
  }

  private getImmediateParent(hash: Category, needle: Category): Category {
    if (needle.parentPath) {
      const entity: Category = needle.parentPath.split(Category.PARENT_PATH_SEPARATOR)
        .slice(1)
        .reduce((result: Category, part: string) => {
          return (result.subCategories || {})[part];
        }, hash);
      return (entity.subCategories || {})[needle.uid];
    } else {
      return hash;
    }
  }

}
