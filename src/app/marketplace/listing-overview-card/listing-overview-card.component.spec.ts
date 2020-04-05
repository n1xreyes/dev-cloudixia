import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingOverviewCardComponent } from './listing-overview-card.component';

describe('ListingOverviewCardComponent', () => {
  let component: ListingOverviewCardComponent;
  let fixture: ComponentFixture<ListingOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingOverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
