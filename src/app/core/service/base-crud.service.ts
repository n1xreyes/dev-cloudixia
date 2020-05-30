import { from, Observable } from 'rxjs';
import { IDomain } from '../model/i-domain.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ImageUploadService } from '../../store/image-upload/image-upload.service';
import { BuildFileMetadataService } from '../../shared/components/image-upload/build-file-metadata.service';
import { FileFolderName } from '../../shared/models/file-metadata.model';

export abstract class BaseCrudService<T extends IDomain> {

  protected abstract fs: AngularFirestore;
  protected abstract dbCollectionName: string;
  protected abstract imageUploadService: ImageUploadService;
  protected abstract buildFileMetadataService: BuildFileMetadataService;

  getNewUid(): string {
    return this.fs.createId();
  }

  get(uid: string) {
    return this.fs.doc(`${this.dbCollectionName}/${uid}`).snapshotChanges();
  }

  list() {
    return this.fs.collection(this.dbCollectionName).snapshotChanges();
  }

  async add(entity: any) {
    entity.uid = this.fs.createId();
    if (entity.file) {
      entity.photoUrl = await this.getEntityPhotoUrl(entity);
      delete entity.file;
    }
    return from(this.fs.firestore.doc(`${this.dbCollectionName}/${entity.uid}`).set(entity))
      .pipe(map(() => entity.uid));
  }

  async update(entity: any) {
    if (entity.file) {
      entity.photoUrl = await this.getEntityPhotoUrl(entity);
      delete entity.file;
    }
    return from(
      this.fs.doc(`${this.dbCollectionName}/${entity.uid}/`)
        .update({ ...entity }));
  }

  delete(entity: T): Observable<void> {
    return from(this.fs.doc(`${this.dbCollectionName}/${entity.uid}`).delete());
  }

  async getEntityPhotoUrl(entity: any) {
    let photoUrl = '';
    if (entity.file) {
      const fileMeta = this.buildFileMetadataService.buildFileMetadata(FileFolderName.CATEGORY, entity.uid);
      // get photoURL
      await this.imageUploadService.uploadImage(entity.file, fileMeta).toPromise().then((payload: any) => {
        if (payload.URL) {
          photoUrl = payload.URL;
        }
      });
      return photoUrl;
    }
  }

}
