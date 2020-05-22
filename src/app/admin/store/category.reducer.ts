import { CategoryActions, CategoryActionTypes } from './category.actions';
import { CategoryState, categoryStateInitial } from './category.state';

export function categoryReducer(state = categoryStateInitial, action: CategoryActions): CategoryState {
  switch (action.type) {
    case CategoryActionTypes.GET_CATEGORIES: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case CategoryActionTypes.CATEGORIES_FETCHED: {
      return Object.assign({}, state, {
        categoryList: action.payload.list,
        loading: false
      });
    }
    case CategoryActionTypes.CATEGORY_ERROR: {
      return Object.assign({}, state, {
        error: action.payload.error
      });
    }
    default:
      return state;
  }
}
