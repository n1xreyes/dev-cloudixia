import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListingState } from 'src/app/shared/models/listing-state.enum';
import { Listing } from 'src/app/shared/models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private marketplaceService: MarketplaceService,
    private authService: AuthService,
    private fs: AngularFirestore
  ) { }

  getUsersList() {
    const usersRef = this.fs.collection('users');
    return usersRef.valueChanges();
  }

  checkAdminRole(uid: string) {
    return this.authService.checkAdminRole(uid);
  }

  deletePendingUserProject(listing: Listing): Observable<void> {
    return from(this.marketplaceService.deletePending(listing));
  }

  addAdminPrivileges(uid: string) {
    const adminsRef = this.fs.doc('admins/' + uid);
    return from(adminsRef.set({isAdmin: true}));
  }

  removeAdminPrivileges(uid: string) {
    this.fs.doc('users/' + uid).update({ isAdmin: false });
    return from(this.fs.doc('admins/' + uid).delete());
  }
}
