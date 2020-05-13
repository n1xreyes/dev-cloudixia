import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Category, categories } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  categories: Category[] = categories;
  projectData: Subject<Listing> = new Subject<Listing>();

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categories: new FormControl([], Validators.required),
    photoUrl: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0.01)])
  });

  heading: string;
  entity: Listing;

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit() {
    Object.entries(this.entity).forEach(([key, value]) => {
      const control: AbstractControl = this.form.controls[key];
      if (control) {
        control.setValue(value);
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

  setListingPhotoUrl(url: string) {
    this.form.controls['photoUrl'].setValue(url);
  }

}
