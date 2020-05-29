import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ErrorLogEffects } from './error-log.effects';

describe('ErrorLogEffects', () => {
  let actions$: Observable<any>;
  let effects: ErrorLogEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorLogEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ErrorLogEffects>(ErrorLogEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
