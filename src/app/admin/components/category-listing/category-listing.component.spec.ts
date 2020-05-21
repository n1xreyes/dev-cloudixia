import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryListingComponent } from './category-listing.component';
import { ModalModule } from 'angular-bootstrap-md';
import { TranslateModule } from '@ngx-translate/core';

describe('CategoryListingComponent', () => {
  let component: CategoryListingComponent;
  let fixture: ComponentFixture<CategoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryListingComponent,
      ],
      imports: [
        ModalModule.forRoot(),
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
