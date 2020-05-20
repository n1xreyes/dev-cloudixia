import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesChatRoomComponent } from './messages-chat-room.component';
import { StoreModule } from '@ngrx/store';

describe('MessagesChatRoomComponent', () => {
  let component: MessagesChatRoomComponent;
  let fixture: ComponentFixture<MessagesChatRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesChatRoomComponent ],
      imports: [
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
