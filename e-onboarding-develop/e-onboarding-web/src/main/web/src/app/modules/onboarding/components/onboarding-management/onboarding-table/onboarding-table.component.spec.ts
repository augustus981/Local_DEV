import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingTableComponent } from './onboarding-table.component';

describe('OnboardingTableComponent', () => {
  let component: OnboardingTableComponent;
  let fixture: ComponentFixture<OnboardingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
