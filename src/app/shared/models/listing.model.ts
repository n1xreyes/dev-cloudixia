import { ListingState } from './listing-state.enum';
import { Category } from './category.model';

export class Listing {
  uid: any;
  userId?: string;
  title?: string;
  description?: string;
  photoUrl?: string;
  // TODO: firebase store/return all properties as strings. In order to prevent problems in future, we need to convert to `Number`
  price?: string;
  categories: string[];
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
      this.categories = raw.categories;
    } else {
      this.title = '';
      this.description = '';
      this.photoUrl = '';
      this.price = '0';
      this.categories = [];
      this.state = ListingState.PENDING;
    }
  }

}

export class ListringWithCategory extends Listing {
  category?: Category;

  static getCategoryName(project: ListringWithCategory): string | undefined {
    if (!project?.categories) {
      return '';
    }

    if (project.categories.length === 1) {
      return project?.category?.title;
    } else {
      const parents: Category[] = [];
      const immediateParent: Category | undefined = project.categories
        .slice(1)
        .reduce((collector: Category, categoryUid: string) => {
          parents.push(collector);
          return collector?.subCategories && collector.subCategories[categoryUid];
        }, project.category);

      if (immediateParent) {
        parents.push(immediateParent);
      }

      return parents.map((category: Category) => category?.title).join(' > ');
    }
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
  categories: string[];
}

export class ListingWithPhoto extends Listing {
  file?: File;
}
