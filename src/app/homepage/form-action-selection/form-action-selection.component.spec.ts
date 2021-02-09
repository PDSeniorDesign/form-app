import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormActionSelectionComponent } from './form-action-selection.component';

describe('FormActionSelectionComponent', () => {
  let component: FormActionSelectionComponent;
  let fixture: ComponentFixture<FormActionSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormActionSelectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have showChoices variable set to true as default', () => {
    expect(component.showChoices).toBeTrue();
  });
  it('should show the choices view by default', () => {
    const titleElement = fixture.debugElement.query(By.css('h1.page-title'))
      .nativeElement;

    expect(titleElement.innerText).toContain('What would you like to do?');
  });
  it('should show two buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
  });
  it('should show the reference number prompt if showChoices is false', () => {
    // change showChoices to false
    component.showChoices = false;
    fixture.detectChanges();

    // check that the reference number prompt is showing
    const referenceNumberInput = fixture.debugElement.query(
      By.css('input.referenceNumberPrompt')
    ).nativeElement;
    expect(referenceNumberInput).toBeDefined();
  });
});
