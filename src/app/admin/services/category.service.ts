import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { BaseCrudService } from 'src/app/core/service/base-crud.service';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentSnapshot, Action } from '@angular/fire/firestore';
import {ImageUploadService} from '../../store/image-upload/image-upload.service';
import {BuildFileMetadataService} from '../../shared/components/image-upload/build-file-metadata.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseCrudService<Category> {

  protected dbCollectionName = 'categories';

  constructor(protected fs: AngularFirestore,
              protected imageUploadService: ImageUploadService,
              protected buildFileMetadataService: BuildFileMetadataService) {
    super();
  }

  getSuperParent(entity: Category): Observable<Action<DocumentSnapshot<any>>> {
    if (entity.parents) {
      const superParentUid = entity.parents[0];
      if (superParentUid) {
        return this.get(superParentUid);
      }
    }

    return this.get(entity.uid);
  }

}
