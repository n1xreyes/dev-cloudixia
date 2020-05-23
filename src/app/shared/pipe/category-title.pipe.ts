import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../language.service';
import { Category } from '../models/category.model';

@Pipe({
  name: 'categoryTitle'
})
export class CategoryTitlePipe implements PipeTransform {

  constructor(private languageService: LanguageService) {}

  transform(value: unknown): string {
    return this.languageService.getTranslatedCategoryTitle(value as Category);
  }

}
