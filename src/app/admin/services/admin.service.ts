import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db: AngularFireDatabase, private marketplaceService: MarketplaceService) { }

  getUsersList() {
    const usersRef = this.db.list('users');
    return usersRef.snapshotChanges();
  }

  checkAdminRole(uid: string) {
    return this.db.object('admins/' + uid).valueChanges();
  }

  deletePendingUserProject(listingId: string): Observable<void> {
    return from(this.marketplaceService.deletePending({ uid: listingId }))
  }

  approveUserProject(listingId: string): Observable<void> {
    return from(this.marketplaceService.approve(listingId))
  }

  addAdminPrivileges(uid: string) {
    const adminsRef = this.db.object('admins/' + uid);
    this.db.object('users/' + uid).update({ isAdmin: true });
    return from(adminsRef.set(true));
  }

  removeAdminPrivileges(uid: string) {
    this.db.object('users/' + uid).update({ isAdmin: false });
    return from(this.db.object('admins/' + uid).remove());
  }
}
