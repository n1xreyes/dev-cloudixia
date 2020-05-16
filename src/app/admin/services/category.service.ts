import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Category } from 'src/app/shared/models/category.model';
import { BaseCrudService } from 'src/app/core/service/base-crud.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseCrudService<Category> {

  protected dbCollectionName = 'categories';

  constructor(protected db: AngularFireDatabase) {
    super();
  }

  getSuperParent(entity: Category): Observable<any> {
    if (entity.parentPath) {
      const superParentUid = entity.parentPath.split(Category.PARENT_PATH_SEPARATOR)[0];
      if (superParentUid) {
        return this.get(superParentUid);
      }
    }

    return of({payload: {
      val: () => entity
    }});
  }

}
