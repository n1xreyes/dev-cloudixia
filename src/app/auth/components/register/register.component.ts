import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import * as actions from './../../store/auth.actions';
import { getError } from '../../store/auth.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  type: string;

  error$: Observable<string | null>;

  constructor(
    private store: Store<AppState>,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params) => {
      this.type = params.type;
    });

    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.error$ = this.store
      .pipe(
        select(getError),
        map( (error: any) => {
          if (error) {
            if (error.code === 'auth/weak-password') {
              return error.message;
            } else if (error.code === 'auth/email-already-in-use') {
              return 'User with this email address already exist';
            } else if (error.code === 'auth/invalid-email') {
              return 'Email address is invalid';
            }
          } else {
            return null;
          }
        })
      );
  }

  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  onRegister() {
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    if (this.registerForm.valid) {
      if (this.type === 'seller') {
        this.store.dispatch(new actions.SellerEmailRegisterRequested({ firstName, lastName, email, password }));
        return;
      }

      this.store.dispatch(new actions.EmailRegisterRequested({ firstName, lastName, email, password }));
    }
  }

  onSocialLogin(authProvider: string) {
    if (this.type === 'seller') {
      this.store.dispatch(new actions.SellerSocialRegisterRequested({ authProvider }));
      return;
    }

    this.store.dispatch(new actions.SocialRegisterRequested({ authProvider }));
  }

}
