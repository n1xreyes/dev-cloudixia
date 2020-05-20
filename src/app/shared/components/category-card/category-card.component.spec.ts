import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardComponent } from './category-card.component';
import { ModalModule } from 'angular-bootstrap-md';
import { TranslateModule } from '@ngx-translate/core';

describe('CategoryCardComponent', () => {
  let component: CategoryCardComponent;
  let fixture: ComponentFixture<CategoryCardComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryCardComponent
      ],
      imports: [
        ModalModule.forRoot(),
        TranslateModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    component.entity = {
      uid: 'test',
      title: 'Test',
      photoUrl: 'test.com'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(nativeElement.querySelector('mdb-card-img')).toBeTruthy();
    expect(nativeElement.querySelector('mdb-card-title')?.textContent).toEqual('Test');
    expect(nativeElement.querySelector('.button-wrapper')).toBeFalsy();
  });

  it('should render with edit buttons', () => {
    component.editable = true;
    fixture.detectChanges();
    expect(nativeElement.querySelector('.button-wrapper')).toBeTruthy();
  });

  it('Should show child modal on children button click', () => {
    const show = spyOn(component.modalService, 'show');

    fixture.detectChanges();
    component.onShowChildren();

    expect(show).toHaveBeenCalled();
  });

  it('Should show delete modal on delete button click', () => {
    const show = spyOn(component.modalService, 'show');

    fixture.detectChanges();
    component.onDelete();

    expect(show).toHaveBeenCalled();
  });

  it('Should emit on edit', () => {
    const emit = spyOn(component.edited, 'emit');

    fixture.detectChanges();
    component.onEdit();

    expect(emit).toHaveBeenCalled();
  });
});
