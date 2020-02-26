import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionTaskModifierComponent } from './induction-task-modifier.component';

describe('TaskModifierComponent', () => {
  let component: InductionTaskModifierComponent;
  let fixture: ComponentFixture<InductionTaskModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InductionTaskModifierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionTaskModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
