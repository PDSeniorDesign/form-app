import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormDataService } from 'src/app/core/services/form-data.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '400ms',
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '400ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  submitResponse: object; // Will hold the response if submission is successful
  hasSubmitted: boolean;
  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    console.log('from comp', this.formDataService.formData);
    if (this.formDataService.formData != undefined) {
      this.form = new FormGroup({
        information: new FormGroup({
          lastName: new FormControl(this.formDataService.formData['lastName']),
          firstName: new FormControl(
            this.formDataService.formData['firstName']
          ),
          middleInitial: new FormControl(
            this.formDataService.formData['middleInitial']
          ),
          emailAddress: new FormControl(
            this.formDataService.formData['employeeEmailAddress']
          ),
          phoneNumber: new FormControl(
            this.formDataService.formData['businessPhoneNumber']
          ),
          address: new FormControl(
            this.formDataService.formData['businessStreetAddress']
          ),
          city: new FormControl(this.formDataService.formData['businessCity']),
          state: new FormControl(
            this.formDataService.formData['businessState']
          ),
          zipCode: new FormControl(
            this.formDataService.formData['businessZip']
          ),
        }),
        employeeInformation: new FormGroup({
          employeeNumber: new FormControl(
            this.formDataService.formData['employeeNumber']
          ),
          hostedId: new FormControl(this.formDataService.formData['hostedId']),
        }),
      });
    } else {
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
  }

  // This function is passed down to submit step
  // Will update variable to rerender and hold response object
  setSubmitResponse = (res) => {
    // Arrow function binds this
    this.hasSubmitted = true;
    this.submitResponse = res;
  };
}
