import { AppState } from 'src/app/reducers';
import { createSelector } from '@ngrx/store';

export const getCategoryState = (state: AppState) => state.category;

export const getCategoryList = createSelector(
  getCategoryState,
  category => category.categoryList
);

export const getCategoryListLoading = createSelector(
  getCategoryState,
  category => category.loading
);
