import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionCardListComponent } from './induction-card-list.component';

describe('InductionCardListComponent', () => {
  let component: InductionCardListComponent;
  let fixture: ComponentFixture<InductionCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InductionCardListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
