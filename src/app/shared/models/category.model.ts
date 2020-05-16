import { IDomain } from 'src/app/core/model/i-domain.model';

export class Category implements IDomain {
  static PARENT_PATH_SEPARATOR = '#';

  uid: string;
  title: string;
  photoUrl?: string;
  parentPath?: string;
  subCategories?: {[uid: string]: Category};
}

export const categories: Category[] = [
  {
    uid: '1',
    title: 'Cat1'
  },
  {
    uid: '2',
    title: 'Cat2'
  },
  {
    uid: '3',
    title: 'Cat3'
  },
  {
    uid: '4',
    title: 'Cat4'
  },
  {
    uid: '5',
    title: 'Cat5'
  },
  {
    uid: '6',
    title: 'Cat6'
  }
];
