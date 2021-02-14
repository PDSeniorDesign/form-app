import { animate, style, transition, trigger } from '@angular/animations';
import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
        personalInformation: new FormGroup({
          lastName: new FormControl(this.formDataService.formData['lastName'], [
            Validators.required,
            Validators.pattern('[a-z A-Z]*'),
          ]),
          firstName: new FormControl(
            this.formDataService.formData['firstName'],
            [Validators.required, Validators.pattern('[a-z A-Z]*')]
          ),
          middleInitial: new FormControl(
            this.formDataService.formData['middleInitial'],
            Validators.pattern('[a-z A-Z]*')
          ),
          emailAddress: new FormControl(
            this.formDataService.formData['employeeEmailAddress'],
            [Validators.required, Validators.email]
          ),
          phoneNumber: new FormControl(
            this.formDataService.formData['businessPhoneNumber'],
            [Validators.required, Validators.pattern('[0-9]{10}')]
          ),
        }),
        addressInformation: new FormGroup({
          address: new FormControl(
            this.formDataService.formData['businessStreetAddress'],
            Validators.required
          ),
          city: new FormControl(this.formDataService.formData['businessCity'], [
            Validators.required,
            Validators.pattern('[a-z A-Z]*'),
          ]),
          state: new FormControl(
            this.formDataService.formData['businessState'],
            [Validators.required, Validators.pattern('[a-z A-Z]*')]
          ),
          zipCode: new FormControl(
            this.formDataService.formData['businessZip'],
            [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(7),
              Validators.pattern('[0-9]*'),
            ]
          ),
        }),
        employeeInformation: new FormGroup({
          employeeNumber: new FormControl(
            this.formDataService.formData['employeeNumber'],
            [Validators.required]
          ),
          hostedId: new FormControl(
            this.formDataService.formData['hostedId'],
            Validators.required
          ),
        }),
      });
    } else {
      this.form = new FormGroup({
        personalInformation: new FormGroup({
          lastName: new FormControl(null, [
            Validators.required,
            Validators.pattern('[a-z A-Z]*'),
          ]),
          firstName: new FormControl(null, [
            Validators.required,
            Validators.pattern('[a-z A-Z]*'),
          ]),
          middleInitial: new FormControl(
            null,
            Validators.pattern('[a-z A-Z]*')
          ),
          emailAddress: new FormControl(null, [
            Validators.required,
            Validators.email,
          ]),
          phoneNumber: new FormControl(null, [
            Validators.required,
            Validators.pattern('[0-9]{10}'),
          ]),
        }),
        addressInformation: new FormGroup({
          address: new FormControl(null, Validators.required),
          city: new FormControl(null, [
            Validators.required,
            Validators.pattern('[a-z A-Z]*'),
          ]),
          state: new FormControl(null, [
            Validators.required,
            Validators.pattern('[a-z A-Z]*'),
          ]),
          zipCode: new FormControl(null, [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(7),
            Validators.pattern('[0-9]*'),
          ]),
        }),
        employeeInformation: new FormGroup({
          employeeNumber: new FormControl(null, [Validators.required]),
          hostedId: new FormControl(null, Validators.required),
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


// export class MyErrorStateMatcher implements ErrorStateMatcher {
//     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null) : boolean {
//       return control.dirty && control.touched && control.invalid;
//     }
// }
