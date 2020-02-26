import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionCardComponent } from './induction-card.component';

describe('InductionCardComponent', () => {
  let component: InductionCardComponent;
  let fixture: ComponentFixture<InductionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InductionCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
