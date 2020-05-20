import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/models/user.model';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Language } from 'src/app/shared/models/language.enum';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getLanguage } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainProfileComponent implements OnInit {
  @Input() user: User;
  @Output() profileUpdate = new EventEmitter<any>();
  language$: Observable<Language>;

  updateProfileForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  // Todo: need to "select a photo" once image store is complete
  ngOnInit() {
    this.updateProfileForm = new FormGroup({
      country: new FormControl(this.user.country),
      city: new FormControl(this.user.city),
      street: new FormControl(this.user.street),
      poBox: new FormControl(this.user.poBox),
    });

    this.language$ = this.store.select(getLanguage);
  }

  onProfileUpdate() {
    const changes = {
      country: this.updateProfileForm.value.country ? this.updateProfileForm.value.country : '',
      city: this.updateProfileForm.value.city ? this.updateProfileForm.value.city : '',
      street: this.updateProfileForm.value.street ? this.updateProfileForm.value.street : '',
      poBox: this.updateProfileForm.value.poBox ? this.updateProfileForm.value.poBox : '',
    };


    this.profileUpdate.emit({ user: changes });
  }

}
