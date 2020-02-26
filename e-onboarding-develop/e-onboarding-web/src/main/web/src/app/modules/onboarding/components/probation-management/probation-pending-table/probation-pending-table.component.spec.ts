import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationPendingTableComponent } from './probation-pending-table.component';

describe('ProbationPendingTableComponent', () => {
  let component: ProbationPendingTableComponent;
  let fixture: ComponentFixture<ProbationPendingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationPendingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationPendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
