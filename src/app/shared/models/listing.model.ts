import { ListingState } from './listing-state.enum';
import { Category } from './category.model';

export class Listing {
  uid?: any;
  userId?: string;
  title?: string;
  description?: string;
  photoUrl?: string;
  // TODO: firebase store/return all properties as strings. In order to prevent problems in future, we need to convert to `Number`
  price?: string;
  categories?: Category[];
  state?: ListingState;

  constructor(raw?: ListingAlgolia) {
    if (raw) {
      this.uid = raw.uid;
      this.userId = raw.userId;
      this.title = raw.title;
      this.description = raw.description;
      this.photoUrl = raw.photoUrl;
      this.price = raw.price;
      this.state = ListingState.ACTIVE;
    } else {
      this.title = '';
      this.description = '';
      this.photoUrl = '';
      this.price = '0';
      this.categories = [];
      this.state = ListingState.PENDING;
    }
  }

  static getCategoryNames(project: Listing): string {
    return project.categories?.map((category: Category) => category.title).join(', ') || '';
  }

}

export class ListingAlgolia {
  description: string;
  objectID: string;
  photoUrl: string;
  price: string;
  title: string;
  uid: string;
  userId: string;
}
