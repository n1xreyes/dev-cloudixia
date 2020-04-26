import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Language } from 'src/app/shared/models/language.enum';
import { MDBModalRef } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-localization-modal',
  templateUrl: './localization-modal.component.html',
  styleUrls: ['./localization-modal.component.css']
})
export class LocalizationModalComponent implements OnInit {
  @ViewChild('projectForm', { static: true }) projectForm: NgForm;

  language: Subject<Language> = new Subject();

  formLanguage: Language;
  formCurrency: string;

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }


  onSave() {
    if (this.projectForm.valid) {
      this.language.next(this.formLanguage);
      this.modalRef.hide();
    } else {
      const controls = this.projectForm.controls;
      Object.keys(controls).forEach( controlName => controls[controlName].markAsTouched());
    }
  }

  languageOptions = [
    { value: Language.ARABIC, label: 'عربى' },
    { value: Language.ENGLISH, label: 'English' },
  ];

}
