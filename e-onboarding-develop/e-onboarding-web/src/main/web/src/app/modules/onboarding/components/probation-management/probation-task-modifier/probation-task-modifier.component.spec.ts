import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationTaskModifierComponent } from './probation-task-modifier.component';

describe('ProbationTaskModifierComponent', () => {
  let component: ProbationTaskModifierComponent;
  let fixture: ComponentFixture<ProbationTaskModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationTaskModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationTaskModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
