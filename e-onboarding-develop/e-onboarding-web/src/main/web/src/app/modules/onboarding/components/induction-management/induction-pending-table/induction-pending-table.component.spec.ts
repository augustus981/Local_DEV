import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionPendingTableComponent } from './induction-pending-table.component';

describe('InductionPendingTableComponent', () => {
  let component: InductionPendingTableComponent;
  let fixture: ComponentFixture<InductionPendingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InductionPendingTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionPendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
