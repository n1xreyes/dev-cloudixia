import { IDomain } from 'src/app/core/model/i-domain.model';
import { isObject } from 'lodash';

export class Category implements IDomain {
  uid: string;
  title: string;
  photoUrl?: string;
  parents?: string[];
  subCategories?: {[uid: string]: Category};

  static getSuperParentFromList(items: Category[], parentUids: string[]): Category | undefined {
    const match: Category | undefined = items.find((item: Category) => item.uid === parentUids[0]);
    return Category.getImmediateParentFromSuperParent(match, parentUids);
  }

  static getImmediateParentFromSuperParent(superParent: Category | undefined, parentUids: string[]): Category | undefined {
    if (superParent) {
      const result: Category | undefined = parentUids.slice(1)
        .reduce((result: Category, categoryUid: string) => {
          return result?.subCategories && result.subCategories[categoryUid];
        }, superParent);
      if (result) {
        return result;
      }
    }
  }

  static isCategory(value: any): value is Category {
    return isObject(value) && !!(value as Category).title;
  }

}

export class CategoryWithPhoto extends Category {
  file?: File;
}
