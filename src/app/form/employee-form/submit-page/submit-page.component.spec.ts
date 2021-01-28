import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SubmitPageComponent } from './submit-page.component';

describe('SubmitPageComponent', () => {
  let component: SubmitPageComponent;
  let fixture: ComponentFixture<SubmitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitPageComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPageComponent);
    component = fixture.componentInstance;
    // Adding form to component (regForm)
    component.regForm = new FormGroup({
      information: new FormGroup({
        lastName: new FormControl('Doe'),
        firstName: new FormControl('John'),
        middleInitial: new FormControl('A'),
        emailAddress: new FormControl('test@email.com'),
        phoneNumber: new FormControl('5555555555'),
        address: new FormControl('123 Street'),
        city: new FormControl('City'),
        state: new FormControl('CA'),
        zipCode: new FormControl('12345'),
      }),
      employeeInformation: new FormGroup({
        employeeNumber: new FormControl('test'),
        hostedId: new FormControl('test'),
      }),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the form', () => {
    expect(component.regForm).toBeTruthy();
  });
  it('should have form values in variable', () => {
    expect(component.formValues).toEqual(component.regForm.value);
  });

  // it("should have 2 h4's (Stepper Titles)", () => {
  //   const titleSections = fixture.debugElement.queryAll(By.css('h4'));
  //   expect(titleSections.length).toBe(2);
  // });
});

/*
{
  information: new FormGroup({
    lastName: new FormControl(null),
    firstName: new FormControl(null),
    middleInitial: new FormControl(null),
    emailAddress: new FormControl(null),
    phoneNumber: new FormControl(null),
    address: new FormControl(null),
    city: new FormControl(null),
    state: new FormControl(null),
    zipCode: new FormControl(null),
  }),
  employeeInformation: new FormGroup({
    employeeNumber: new FormControl(null),
    hostedId: new FormControl(null),
  }),
  // accessInformation: TODO: Fill this out later
  // additionalInformation: new FormGroup({
  // })
  // TODO: Fill out the rest
}
*/
