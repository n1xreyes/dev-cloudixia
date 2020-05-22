import { Category } from 'src/app/shared/models/category.model';

export interface CategoryState {
  categoryList: Category[] | null;
  loading: boolean;
  error: any;
}

export const categoryStateInitial: CategoryState = {
  categoryList: null,
  loading: false,
  error: null,
};
