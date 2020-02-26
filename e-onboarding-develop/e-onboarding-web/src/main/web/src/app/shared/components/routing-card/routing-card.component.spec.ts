import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCardComponent } from './routing-card.component';

describe('RoutingCardComponent', () => {
  let component: RoutingCardComponent;
  let fixture: ComponentFixture<RoutingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
