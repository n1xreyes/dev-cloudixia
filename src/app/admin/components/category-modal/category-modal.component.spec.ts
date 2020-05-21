import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModalComponent } from './category-modal.component';
import { MDBModalRef } from 'angular-bootstrap-md';
import { InputWrapperComponent } from 'src/app/shared/components/input-wrapper/input-wrapper.component';
import { TranslateModule } from '@ngx-translate/core';

describe('CategoryModalComponent', () => {
  let component: CategoryModalComponent;
  let fixture: ComponentFixture<CategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryModalComponent,
        InputWrapperComponent,
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: MDBModalRef,
          useValue: {},
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
