import { Component, OnInit, ViewChild } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
  @ViewChild('projectForm', { static: true }) projectForm: NgForm;

  heading: string;

  title: string;
  description: string;
  photoUrl: string;

  projectData: Subject<Listing> = new Subject();
  project: Listing = {};

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit() {
  }

  onSave() {
    if (this.projectForm.valid) {
      this.projectData.next(this.project);
    this.modalRef.hide();
    } else {
      const controls = this.projectForm.controls;
      Object.keys(controls).forEach( controlName => controls[controlName].markAsTouched());
    }
  }

}
