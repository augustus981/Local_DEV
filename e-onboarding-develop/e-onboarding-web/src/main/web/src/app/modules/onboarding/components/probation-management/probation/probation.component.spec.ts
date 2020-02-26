import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationComponent } from './probation.component';

describe('ProbationComponent', () => {
  let component: ProbationComponent;
  let fixture: ComponentFixture<ProbationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
