import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { DEFAULT_PHOTO_URL } from 'src/app/core/service/util.service';
import { CategoryService } from '../../services/category.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { cloneDeep } from 'lodash';
import { CategoryEdited } from '../../store/category.actions';

@Component({
  selector: 'app-category-children-modal',
  templateUrl: './category-children-modal.component.html',
  styleUrls: ['./category-children-modal.component.css']
})
export class CategoryChildrenModalComponent implements OnInit {

  private superParent: Category;
  private immediatedParent: Category;
  private immediateIsSuper = false;

  inputParent: Category;
  list$: Observable<Category[]>;

  constructor(
    private store: Store<AppState>,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.list$ = this.categoryService.getSuperParent(this.inputParent)
      .pipe(
        tap(({payload}) => {
          this.superParent = payload.data();
          this.immediatedParent = this.getImmediateParent(this.superParent, this.inputParent);
        }),
        map(() => {
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
      entity.parents = [
        ...(this.immediatedParent.parents || []),
        this.immediatedParent.uid
      ];
    }

    if (!this.immediatedParent.subCategories) {
      this.immediatedParent.subCategories = {};
    }

    this.immediatedParent.subCategories[entity.uid || ''] = entity;

    this.store.dispatch(new CategoryEdited({ entity: this.getParentForSave() }));
  }

  onDeleted(entity: Category): void {
    if (this.immediatedParent.subCategories) {
      const match: string | undefined = Object.keys(this.immediatedParent.subCategories)
        .find((key: string) => key === entity.uid);
      if (match) {
        delete this.immediatedParent.subCategories[match];
        this.store.dispatch(new CategoryEdited({ entity: this.getParentForSave() }));
      }
    }
  }

  private getParentForSave(): Category {
    return this.immediateIsSuper ? this.immediatedParent : this.superParent;
  }

  private getImmediateParent(hash: Category, needle: Category): Category {
    if (needle.parents) {
      const entity: Category = needle.parents
        .slice(1)
        .reduce((result: Category, part: string) => {
          return (result.subCategories || {})[part];
        }, hash);
      return (entity.subCategories || {})[needle.uid];
    } else {
      this.immediateIsSuper = true;
      return cloneDeep(hash);
    }
  }

}
