import { animate, style, transition, trigger } from '@angular/animations';
import { formatCurrency } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormDataService } from 'src/app/core/services/form-data.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { MatStepper } from '@angular/material/stepper';

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
  @ViewChild('stepper') private myStepper: MatStepper;

  // If form is saved or continued this will be populated in order to show
  requestNumber: number;
  form: FormGroup;
  submitResponse: object; // Will hold the response if submission is successful
  hasSubmitted: boolean;
  currentIndex: number = 0;
  errorStateMatcher = new InstantErrorStateMatcher();
  constructor(
    private formDataService: FormDataService,
    private apiHttpService: ApiHttpService
  ) {}

  ngOnInit(): void {
    console.log('from comp', this.formDataService.formData);
    /**
     * If there is a form in the form data service, then it most likely
     * means that the user is coming from the homepage. Meaning that they
     * are continuing a form.
     */
    // TODO: Work on filling Access Information if user is continuing form
    if (this.formDataService.formData != undefined) {
      // Set request number
      this.requestNumber = this.formDataService.formData.requestNumber;

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
        accessInformation: new FormGroup({
          // IBM Data Center Access
          ibmLogonId: new FormControl(null),
          majorGroupCode: new FormControl(null),
          lsoGroupCode: new FormControl(null),
          securityAuthorization: new FormControl(null),
          // Unix Environment Access
          unixLogonId: new FormControl(null),
          application: new FormControl(null),
          accessGroup: new FormControl(null),
          accountNumber: new FormControl(null),
          // SecurID Remote Access
          billingAccountNumber: new FormControl(null),
          accessType: new FormControl(null),
        }),
      });
    } else {
      // Starting a new form
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
        accessInformation: new FormGroup({
          // IBM Data Center Access
          ibmLogonId: new FormControl(null, []),
          majorGroupCode: new FormControl(null, [
            Validators.pattern('[0-9]{2}'),
            Validators.minLength(2),
            Validators.maxLength(2),
          ]),
          lsoGroupCode: new FormControl(null, [
            Validators.pattern('[0-9]{2}'),
            Validators.minLength(2),
            Validators.maxLength(2),
          ]),
          securityAuthorization: new FormControl(null),
          // Unix Environment Access
          unixLogonId: new FormControl(null),
          application: new FormControl(null),
          accessGroup: new FormControl(null),
          accountNumber: new FormControl(null),
          // SecurID Remote Access
          billingAccountNumber: new FormControl(null),
          accessType: new FormControl(null),
        }),
        // TODO: Fill out the rest
      });
      // To show the form instead of the submit page
      this.hasSubmitted = false;
    }
  }

  /*This functions is passed down to submit step
   *and it will change the index of the stepper*/
  setIndex = (currentIndex: number) => {
    this.myStepper.selectedIndex = currentIndex;
  };

  // This function is passed down to submit step
  // Will update variable to rerender and hold response object
  setSubmitResponse = (res) => {
    // Arrow function binds this
    this.hasSubmitted = true;
    this.submitResponse = res;
  };

  // This function is responsible for saving the form
  save = () => {
    console.log('current form data', this.formDataService.formData);
    // A form is already in formData Service
    if (this.formDataService.formData != undefined) {
      console.log('from formData', this.formDataService.formData);
      this.apiHttpService
        .saveForm(this.formDataService.formData.requestNumber, this.form.value)
        .subscribe((res) => {
          console.log(res);
          // Set the formData to the response
          this.formDataService.formData = res;
        });
    } else {
      // Create a form and set to service
      this.apiHttpService.createForm(this.form.value).subscribe((res) => {
        console.log(res);
        this.formDataService.formData = res;

        // Set request number so it can display on page
        this.requestNumber = this.formDataService.formData.requestNumber;
      });
    }
  };
}

//changes the ErrorStateMatcher to include dirty
//removes the error message and red boxes after clicking next
export class InstantErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control && control.invalid && (control.dirty || control.touched);
  }
}
