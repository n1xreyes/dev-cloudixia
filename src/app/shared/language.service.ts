import { Injectable, ApplicationRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './models/language.enum';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import * as fromAuth from 'src/app/auth/store/auth.actions';
import { Category } from './models/category.model';
import { isObject } from 'lodash';
import { ListingWithCategory } from './models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translateService: TranslateService,
    private store: Store<AppState>,
    private applicationRef: ApplicationRef
    ) {
    this.bootstrapLang();
   }

  // Set the presentation language, returns a boolean indicating whether it is a RTL language
  // true for RTL language
  private bootstrapLang(): void {

    // Check Local Storage first
    const localStorageLang = localStorage.getItem('language');
    if (localStorageLang) {
      this.helperBootstrapLang(localStorageLang === Language.ARABIC ? Language.ARABIC : Language.ENGLISH);
      return;
    }

    // Then check Browser Default
    const browserLang = this.translateService.getBrowserLang();
    if (browserLang === Language.ARABIC) {
      this.helperBootstrapLang(Language.ARABIC);
      return;
    }

    // Otherwise use English
    this.helperBootstrapLang(Language.ENGLISH);
  }

  // All these things must be done when a language is set.
  private helperBootstrapLang(lang: Language) {
    // set the actual translater
    this.translateService.setDefaultLang(lang);
    // set the store
    this.store.dispatch(new fromAuth.LanguageChange({language: lang}));
  }

  // To be called by Effect
  public setLanguage(lang: Language) {
     // set the actual transalter
     this.translateService.use(lang);
     this.applicationRef.tick();
     // set the local storage
     localStorage.setItem('language', lang);
  }

  public getTranslatedCategoryTitle(category?: Category): string {
    if (Category.isCategory(category)) {
      return (category as any)[`title_${this.translateService.currentLang}`]
        || (category as any)[`title_${this.translateService.getDefaultLang()}`]
        || category.title;
    }
    return '';
  }

  public getTranslatedCategoryChainTitle(project: ListingWithCategory): string {
    if (!isObject(project) || !project?.categories) {
      return '';
    }

    if (project.categories.length === 1) {
      return this.getTranslatedCategoryTitle(project?.category);
    } else {
      const parents: Category[] = [];
      const immediateParent: Category | undefined = project.categories
        .slice(1)
        .reduce((collector: Category, categoryUid: string) => {
          parents.push(collector);
          return collector?.subCategories && collector.subCategories[categoryUid];
        }, project.category);

      if (immediateParent) {
        parents.push(immediateParent);
      }

      return parents.map((category: Category) => this.getTranslatedCategoryTitle(category)).join(' > ');
    }
  }

}
