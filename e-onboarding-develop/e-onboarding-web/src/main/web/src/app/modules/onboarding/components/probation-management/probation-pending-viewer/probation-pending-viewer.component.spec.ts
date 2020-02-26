import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationPendingViewerComponent } from './probation-pending-viewer.component';

describe('ProbationPendingViewerComponent', () => {
  let component: ProbationPendingViewerComponent;
  let fixture: ComponentFixture<ProbationPendingViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationPendingViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationPendingViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
