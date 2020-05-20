import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Category } from 'src/app/shared/models/category.model';
import { BaseCrudService } from 'src/app/core/service/base-crud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseCrudService<Category> {

  protected dbCollectionName = 'categories';

  constructor(protected db: AngularFireDatabase) {
    super();
  }

  getSuperParent(entity: Category): Observable<any> {
    if (entity.parents) {
      const superParentUid = entity.parents[0];
      if (superParentUid) {
        return this.get(superParentUid);
      }
    }

    return this.get(entity.uid);
  }

}
