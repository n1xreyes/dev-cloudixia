import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Category } from 'src/app/shared/models/category.model';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {

  // Input
  entity: Category;

  result: Subject<Category> = new Subject<Category>();

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    photoUrl: new FormControl(''),
  });

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit(): void {
  }

}
