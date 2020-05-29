import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest, from, Observable, of } from 'rxjs';
import { Order, OrdersSearchType, OrderWithUserProfiles } from 'src/app/shared/models/order.model';
import { Listing } from 'src/app/shared/models/listing.model';
import { AuthService } from '../../auth/services/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserProfile } from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private fs: AngularFirestore,
    private authService: AuthService
  ) { }

  findOrdersByBuyerId(userId: string, field: OrdersSearchType) {
    return this.fs.collection(
        'orders',
        ref => ref.where(field, '==', userId).orderBy('createdDate', 'desc')
      )
      .valueChanges();
  }

  purchase(listing: Listing, userId: string) {
    const order: Order = new Order(this.fs.createId(), userId, listing);
    return from(this.fs.doc(`orders/${order.uid}`).set(Object.assign({}, order)));
  }

  findOrderById(id: string): Observable<OrderWithUserProfiles> {
    return from(
      this.fs.doc(`orders/${id}`)
        .valueChanges()
        .pipe(
          switchMap((order: Order) => {
            return combineLatest([
              of(order),
              this.authService.getDBUserProfile(order.sellerUid),
              this.authService.getDBUserProfile(order.buyerUid)
            ]);
          }),
          map(([order, seller, buyer]: [OrderWithUserProfiles, UserProfile, UserProfile]) => {
            order.seller = seller;
            order.buyer = buyer;
            return order;
          })
        )
    ) as Observable<OrderWithUserProfiles>;
  }
}
