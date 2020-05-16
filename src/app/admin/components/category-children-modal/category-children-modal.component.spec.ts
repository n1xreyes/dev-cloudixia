import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChildrenModalComponent } from './category-children-modal.component';

describe('CategoryChildrenModalComponent', () => {
  let component: CategoryChildrenModalComponent;
  let fixture: ComponentFixture<CategoryChildrenModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryChildrenModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChildrenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
