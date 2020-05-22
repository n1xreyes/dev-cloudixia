import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';
import {ListingWithPhoto} from 'src/app/shared/models/listing.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Category, categories } from 'src/app/shared/models/category.model';
import {AppState} from '../../../reducers';
import {select, Store} from '@ngrx/store';
import {User} from '../../../auth/models/user.model';
import {getUser} from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  categories: Category[] = categories;
  projectData: Subject<ListingWithPhoto> = new Subject<ListingWithPhoto>();
  user: User;

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categories: new FormControl([], Validators.required),
    photoUrl: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0.01)])
  });

  heading: string;
  entity: ListingWithPhoto;

  constructor(public modalRef: MDBModalRef, private store: Store<AppState>) {}

  ngOnInit() {
    Object.entries(this.entity).forEach(([key, value]) => {
      const control: AbstractControl = this.form.controls[key];
      if (control) {
        control.setValue(value);
      }
    });

    this.store.pipe(
      select(getUser)
    ).subscribe( userState => {
      if (userState) {
        this.user = userState;
      }
    });
  }

  onSave() {
    if (this.form.valid) {
      this.projectData.next({
        ...this.entity,
        ...this.form.value
      });
      this.modalRef.hide();
    } else {
      Object.keys(this.form.controls)
        .forEach(controlName => this.form.controls[controlName].markAsTouched());
    }
  }

  setSelectedPhoto(file: File) {
    this.entity.file = file;
  }

}
