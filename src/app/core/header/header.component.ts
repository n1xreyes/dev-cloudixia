import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User, UserProfile } from '../../auth/models/user.model';
import { Language } from 'src/app/shared/models/language.enum';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/auth/store/auth.state';
import * as fromAuth from 'src/app/auth/store/auth.actions';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { LocalizationModalComponent } from './localization-modal/localization-modal.component';
import { take } from 'rxjs/operators';
import { DEFAULT_MODAL_CONFIG } from '../service/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  @Input() userProfile: UserProfile;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;
  @Input() language: Language;

  @Output() logout = new EventEmitter<User>();

  // Localization Modal
  localizationModalRef: MDBModalRef;

  constructor(
    private store: Store<AuthState>,
    private modalService: MDBModalService,
  ) { }

  ngOnInit() { }

  onLogout() {
    this.logout.emit();
  }

  openLocalizationModal() {
    this.localizationModalRef = this.modalService.show(LocalizationModalComponent, DEFAULT_MODAL_CONFIG);

    // Inject current language
    this.localizationModalRef.content.formLanguage = this.language;

    // Listen for changes to the Language - Fired on "save" event
    this.localizationModalRef.content.language
      .pipe(take(1))
      .subscribe((language: Language) => {
        this.store.dispatch(new fromAuth.LanguageChange({language: language}));
      });
  }

}
