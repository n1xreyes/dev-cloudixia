import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CategoryService } from '../services/category.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  CategoryActionTypes,
  CategoryAdded,
  CategoryError,
  CategoryListFetched,
  CategoryEdited,
  CategoryDeleted
} from './category.actions';
import { Category } from 'src/app/shared/models/category.model';
import { DEFAULT_PHOTO_URL } from 'src/app/core/service/util.service';

@Injectable()
export class CategoryEffects {

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}

  @Effect()
  getCategoryList$ = this.actions$.pipe(
    ofType(CategoryActionTypes.GET_CATEGORIES),
    switchMap( () => this.categoryService.list()
      .pipe(
        map( (rawResult: any) => {
          const list: any[] = rawResult.map((res: any) => {
            return { ...res.payload.val() };
          });
          return (new CategoryListFetched({ list }));
        }),
        catchError((error: any) => of(new CategoryError({ error })))
      )
    )
  );

  @Effect({dispatch: false})
  added$ = this.actions$.pipe(
    ofType(CategoryActionTypes.CATEGORY_ADDED),
    map((action: CategoryAdded) => action.payload),
    switchMap((payload) => {
      const entity: Category = {...payload.entity};

      if (!entity.photoUrl) {
        entity.photoUrl = DEFAULT_PHOTO_URL;
      }

      return this.categoryService.add(entity);
    }),
    catchError((error: any) => of(new CategoryError({ error })))
  );

  @Effect({dispatch: false})
  edit$ = this.actions$.pipe(
    ofType(CategoryActionTypes.CATEGORY_EDITED),
    map((action: CategoryEdited) => action.payload),
    map((payload) => {
      const entity: Category = {...payload.entity};

      if (!entity.photoUrl) {
        entity.photoUrl = DEFAULT_PHOTO_URL;
      }

      return this.categoryService.update(entity);
    }),
    catchError((error: any) => of(new CategoryError({ error })))
  );

  @Effect({dispatch: false})
  delete$ = this.actions$.pipe(
    ofType(CategoryActionTypes.CATEGORY_DELETED),
    map((action: CategoryDeleted) => action.payload),
    map((payload) => this.categoryService.delete(payload.entity)),
    catchError((error: any) => of(new CategoryError({ error })))
  );

}
