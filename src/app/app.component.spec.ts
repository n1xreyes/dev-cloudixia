import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { Language } from './shared/models/language.enum';
import { of } from 'rxjs';
import { LanguageService } from './shared/language.service';
import { authReducer } from './auth/store/auth.reducer';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        StoreModule.forFeature('auth', authReducer),
        StoreModule.forRoot({})
      ],
      providers: [
        LanguageService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('app');
  }));

  it(`should apply the correct css depending on the language`, async(() => {
    component.language$ = of(Language.ENGLISH)
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector(".rtl")).toBeNull()
    component.language$ = of(Language.ARABIC)
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector(".rtl")).toBeTruthy();
  }));

});
