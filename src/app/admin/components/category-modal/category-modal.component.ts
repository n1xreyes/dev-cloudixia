import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Language } from 'src/app/shared/models/language.enum';

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

  constructor() {
    this.getLanguages().forEach((lang: string) => {
      this.form.addControl(`title_${lang}`, new FormControl(''));
    });
  }

  ngOnInit(): void {
  }

  getLanguages(): string[] {
    return Object.values(Language);
  }

}
