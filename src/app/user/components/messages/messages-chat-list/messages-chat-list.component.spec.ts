import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesChatListComponent } from './messages-chat-list.component';

describe('MessagesChatListComponent', () => {
  let component: MessagesChatListComponent;
  let fixture: ComponentFixture<MessagesChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesChatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
