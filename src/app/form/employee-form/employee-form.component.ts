import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  submitResponse: object; // Will hold the response if submission is successful
  hasSubmitted: boolean;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
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
    });
    this.hasSubmitted = false;
  }

  // This function is passed down to submit step
  // Will update variable to rerender and hold response object
  setSubmitResponse = (res) => {
    // Arrow function binds this
    this.hasSubmitted = true;
    this.submitResponse = res;
  };
}
