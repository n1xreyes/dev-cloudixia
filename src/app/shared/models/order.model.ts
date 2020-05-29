import { Listing } from './listing.model';
import * as moment from 'moment';
import { UserProfile } from '../../auth/models/user.model';

export enum OrdersSearchType {
  BUYER = 'buyerUid',
  SELLER = 'sellerUid'
}

export enum OrderStatus {
  ACTIVE = 'ACTIVE',
  COMPLETE = 'COMPLETE'
}

export class Order {
  uid: string;
  status: OrderStatus;
  title: string;
  description: string;
  price: number;
  sellerUid: string;
  buyerUid: string;
  listingUid: string;
  createdDate: number;

  constructor(uid: string, buyerId: string, listing: Listing) {
    this.uid = uid;
    this.status = OrderStatus.ACTIVE;
    this.title = listing.title as string;
    this.description = listing.description as string;
    this.price = (listing.price || 0) as number;
    this.buyerUid = buyerId;
    this.sellerUid = listing.userId as string;
    this.listingUid = listing.uid;
    this.createdDate = moment().valueOf();
  }

}

export class OrderWithUserProfiles extends Order {
  seller?: UserProfile;
  buyer?: UserProfile;
}
