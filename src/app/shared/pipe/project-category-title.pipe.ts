import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../language.service';
import { ListingWithCategory } from '../models/listing.model';

@Pipe({
  name: 'projectCategoryTitle'
})
export class ProjectCategoryTitlePipe implements PipeTransform {

  constructor(private languageService: LanguageService) {}

  transform(value: unknown): string {
    return this.languageService.getTranslatedCategoryChainTitle(value as ListingWithCategory);
  }

}
