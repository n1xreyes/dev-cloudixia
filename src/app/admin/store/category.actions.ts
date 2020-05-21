import { Action } from '@ngrx/store';
import { Category } from 'src/app/shared/models/category.model';

export enum CategoryPostChangedType {
  ADDED, EDITED, DELETED
}

export enum CategoryActionTypes {
  GET_CATEGORIES = '[Shared] Get Categories',
  CATEGORIES_FETCHED = '[Shared] Categories fetched',
  CATEGORY_ERROR = '[Shared] Category Error',

  CATEGORY_ADDED = '[Admin] Category Added',
  CATEGORY_EDITED = '[Admin] Category Edited',
  CATEGORY_DELETED = '[Admin] Category Deleted',
  CATEGORY_POST_CHANGED = '[Admin] Category POST Changed'
}

export class GetCategoryList implements Action {
  readonly type = CategoryActionTypes.GET_CATEGORIES;
}

export class CategoryListFetched implements Action {
  readonly type = CategoryActionTypes.CATEGORIES_FETCHED;

  constructor(public payload: {list: any[]}) {}
}

export class CategoryError implements Action {
  readonly type = CategoryActionTypes.CATEGORY_ERROR;

  constructor(public payload: {error: any}) {}
}

export class CategoryAdded implements Action {
  readonly type = CategoryActionTypes.CATEGORY_ADDED;

  constructor(public payload: {entity: Category}) {}
}

export class CategoryEdited implements Action {
  readonly type = CategoryActionTypes.CATEGORY_EDITED;

  constructor(public payload: {entity: Category}) {}
}

export class CategoryDeleted implements Action {
  readonly type = CategoryActionTypes.CATEGORY_DELETED;

  constructor(public payload: {entity: Category}) {}
}

export class CategoryPostChanged implements Action {
  readonly type = CategoryActionTypes.CATEGORY_POST_CHANGED;

  constructor(public payload: {uid: string, type: CategoryPostChangedType}) { }
}

export type CategoryActions =
  GetCategoryList
  | CategoryListFetched
  | CategoryError
  | CategoryAdded
  | CategoryEdited
  | CategoryDeleted
  | CategoryPostChanged;
