import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
          lastName: new FormControl(this.formDataService.formData['lastName'], 
          Validators.required
          ),
          firstName: new FormControl(
            this.formDataService.formData['firstName'], 
            Validators.required
          ),
          middleInitial: new FormControl(
            this.formDataService.formData['middleInitial']
          ),
          emailAddress: new FormControl(
            this.formDataService.formData['employeeEmailAddress'], 
            [Validators.required, Validators.email]
          ),
          phoneNumber: new FormControl(
            this.formDataService.formData['businessPhoneNumber'], 
            Validators.required
          ),
          address: new FormControl(
            this.formDataService.formData['businessStreetAddress'], 
            Validators.required
          ),
          city: new FormControl(this.formDataService.formData['businessCity'], 
          Validators.required
          ), 
          state: new FormControl(
            this.formDataService.formData['businessState'], 
            Validators.required
          ),
          zipCode: new FormControl(
            this.formDataService.formData['businessZip'],
            Validators.required
          ),
        }),
        employeeInformation: new FormGroup({
          employeeNumber: new FormControl(
            this.formDataService.formData['employeeNumber'],
            [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
          ),
          hostedId: new FormControl(this.formDataService.formData['hostedId'],
          Validators.required
          ),
        }),
      });
    } else {
      this.form = new FormGroup({
        information: new FormGroup({
          lastName: new FormControl(null,
            Validators.required
            ),
          firstName: new FormControl(null,
            Validators.required
            ),
          middleInitial: new FormControl(null),
          emailAddress: new FormControl(null,
            [Validators.required, Validators.email]
            ),
          phoneNumber: new FormControl(null,
            Validators.required
            ),
          address: new FormControl(null,
            Validators.required
            ),
          city: new FormControl(null,
            Validators.required
            ),
          state: new FormControl(null,
            Validators.required
            ),
          zipCode: new FormControl(null,
            Validators.required
            ),
        }),
        employeeInformation: new FormGroup({
          employeeNumber: new FormControl(null,
            [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
            ),
          hostedId: new FormControl(null,
            Validators.required
            ),
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

    //stop here if form has invalid content
    if(this.form.invalid) {
      console.log("Invalid content of forms")//debug
      return;
    }

    // Arrow function binds this
    this.hasSubmitted = true;
    this.submitResponse = res;
  };
}
