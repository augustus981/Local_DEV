import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationCardComponent } from './probation-card.component';

describe('ProbationCardComponent', () => {
  let component: ProbationCardComponent;
  let fixture: ComponentFixture<ProbationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
