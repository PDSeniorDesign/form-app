import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EmployeeFormComponent } from '../employee-form.component';

import { AccessInformationComponent } from './access-information.component';

describe('AccessInformationComponent', () => {
  let component: AccessInformationComponent;
  let fixture: ComponentFixture<AccessInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessInformationComponent, EmployeeFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Test other checkboxes
  it('should trigger function on checkbox click (IBM DATA CENTER)', () => {
    spyOn(component, 'checkboxUpdate').and.callThrough();
    // IBM Data Center Access element
    const ibmDataCenterAccessCheckbox = fixture.debugElement.query(
      By.css('input#ibmCheckbox')
    ).nativeElement;

    expect(ibmDataCenterAccessCheckbox.checked).toBeFalsy();

    // Simulating a click
    ibmDataCenterAccessCheckbox.click();
    fixture.detectChanges();

    expect(ibmDataCenterAccessCheckbox.checked).toBeTruthy();
    expect(component.checkboxUpdate).toHaveBeenCalled();
  });

  it('should render the form on click (IBM DATA CENTER)', () => {
    expect(component.renderIBMForm).toBeFalse();
    // Container where forms will render
    const accessInformationFormsDiv = fixture.debugElement.query(
      By.css('div.accessInformationForms')
    ).nativeElement;

    // Make sure it is not rendered
    expect(fixture.debugElement.query(By.css('.ibmForm'))).toBeFalsy();

    const ibmDataCenterAccessCheckbox = fixture.debugElement.query(
      By.css('input#ibmCheckbox')
    ).nativeElement;

    ibmDataCenterAccessCheckbox.click();
    fixture.detectChanges();

    expect(component.renderIBMForm).toBeTrue();
    expect(accessInformationFormsDiv.hasChildNodes()).toBeTrue();
    expect(fixture.debugElement.query(By.css('.ibmForm'))).toBeTruthy(); // Should be rendered
  });

  it('should unrender when reclicked', () => {
    // renderIBMForm will be false at first

    // Reclick
    const ibmDataCenterAccessCheckbox = fixture.debugElement.query(
      By.css('input#ibmCheckbox')
    ).nativeElement;

    ibmDataCenterAccessCheckbox.click();
    ibmDataCenterAccessCheckbox.click();

    fixture.detectChanges();
    // Check that form is gone
    expect(component.renderIBMForm).toBeFalse();
    expect(fixture.debugElement.query(By.css('.ibmForm'))).toBeFalsy();
  });
});
