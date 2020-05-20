import { AngularFireDatabase } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import { IDomain } from '../model/i-domain.model';

export abstract class BaseCrudService<T extends IDomain> {

  protected abstract db: AngularFireDatabase;
  protected abstract dbCollectionName: string;

  getNewUid(): string {
    const newKey: string | null = this.db.createPushId();
    if (!newKey) {
      throw new Error('We are doomed!');
    }
    return newKey;
  }

  get(uid: string) {
    return this.db.object(`${this.dbCollectionName}/${uid}`).snapshotChanges();
  }

  list() {
    return this.db.list(this.dbCollectionName).snapshotChanges();
  }

  add(entity: T): Observable<string> {
    const newUid: string = this.getNewUid();
    return from(this.db.list(this.dbCollectionName)
      .set(newUid, {
        ...entity,
        uid: newUid,
      })
      .then(() => newUid));
  }

  update(entity: T): Observable<void> {
    return from(this.db.object(`${this.dbCollectionName}/${entity.uid}/`)
      .update({ ...entity }));
  }

  delete(entity: T): Observable<void> {
    return from(this.db.object(`${this.dbCollectionName}/${entity.uid}`).remove());
  }

}
