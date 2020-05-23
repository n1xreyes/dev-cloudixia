import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject, Observable } from 'rxjs';
import { ListingWithPhoto } from 'src/app/shared/models/listing.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category.model';
import { getCategoryList } from 'src/app/admin/store/category.selectors';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import * as fromCategory from '../../../admin/store/category.actions';
import {getUser} from '../../../auth/store/auth.selectors';
import {User} from '../../../auth/models/user.model';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  // Input
  entity: ListingWithPhoto;

  categories$: Observable<Category[] | null>;
  result: Subject<ListingWithPhoto> = new Subject<ListingWithPhoto>();
  user: User;

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categories: new FormControl([], Validators.required),
    photoUrl: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0.01)])
  });

  constructor(
    public modalRef: MDBModalRef,
    public store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.categories$ = this.store.pipe(
      select(getCategoryList),
      map((categories: Category[]) => {
        if (!categories) {
          this.store.dispatch(new fromCategory.GetCategoryList());
        }
        return categories;
      })
    );

    this.store.pipe(
        select(getUser)
    ).subscribe( userState => {
      if (userState) {
        this.user = userState;
      }
    });
  }

  setSelectedPhoto(file: File) {
    this.entity.file = file;
  }

}
