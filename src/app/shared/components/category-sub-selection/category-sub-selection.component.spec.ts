import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySubSelectionComponent } from './category-sub-selection.component';

describe('CategorySubSelectionComponent', () => {
  let component: CategorySubSelectionComponent;
  let fixture: ComponentFixture<CategorySubSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySubSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySubSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
