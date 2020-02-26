import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionPendingViewerComponent } from './induction-pending-viewer.component';

describe('InductionPendingViewerComponent', () => {
  let component: InductionPendingViewerComponent;
  let fixture: ComponentFixture<InductionPendingViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InductionPendingViewerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionPendingViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
