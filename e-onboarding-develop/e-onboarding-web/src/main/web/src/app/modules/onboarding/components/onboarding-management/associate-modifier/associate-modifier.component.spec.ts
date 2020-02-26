import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateModifierComponent } from './associate-modifier.component';

describe('AssociateModifierComponent', () => {
  let component: AssociateModifierComponent;
  let fixture: ComponentFixture<AssociateModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateModifierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
