import { from, Observable } from 'rxjs';
import { IDomain } from '../model/i-domain.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export abstract class BaseCrudService<T extends IDomain> {

  protected abstract fs: AngularFirestore;
  protected abstract dbCollectionName: string;

  getNewUid(): string {
    return this.fs.createId();
  }

  get(uid: string) {
    return this.fs.doc(`${this.dbCollectionName}/${uid}`).snapshotChanges();
  }

  list() {
    return this.fs.collection(this.dbCollectionName).snapshotChanges();
  }

  add(entity: T): Observable<string> {
    entity.uid = this.fs.createId();
    return from(this.fs.firestore.doc(`${this.dbCollectionName}/${entity.uid}`).set(entity))
      .pipe(map(() => entity.uid));
  }

  update(entity: T): Observable<void> {
    return from(
      this.fs.doc(`${this.dbCollectionName}/${entity.uid}/`)
        .update({ ...entity }));
  }

  delete(entity: T): Observable<void> {
    return from(this.fs.doc(`${this.dbCollectionName}/${entity.uid}`).delete());
  }

}
