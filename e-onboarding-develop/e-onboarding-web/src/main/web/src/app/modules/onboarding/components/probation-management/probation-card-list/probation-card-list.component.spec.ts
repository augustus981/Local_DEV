import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationCardListComponent } from './probation-card-list.component';

describe('ProbationCardListComponent', () => {
  let component: ProbationCardListComponent;
  let fixture: ComponentFixture<ProbationCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
