import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActionSelectionComponent } from './form-action-selection.component';

describe('FormActionSelectionComponent', () => {
  let component: FormActionSelectionComponent;
  let fixture: ComponentFixture<FormActionSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormActionSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
