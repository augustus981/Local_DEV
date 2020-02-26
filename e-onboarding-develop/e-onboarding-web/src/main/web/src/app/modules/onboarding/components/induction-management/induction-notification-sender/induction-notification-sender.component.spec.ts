import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionNotificationSenderComponent } from './induction-notification-sender.component';

describe('InductionNotificationSenderComponent', () => {
  let component: InductionNotificationSenderComponent;
  let fixture: ComponentFixture<InductionNotificationSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InductionNotificationSenderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionNotificationSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
