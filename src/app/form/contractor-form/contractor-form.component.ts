import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormDataService } from 'src/app/core/services/form-data.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-contractor-form',
  templateUrl: './contractor-form.component.html',
  styleUrls: ['./contractor-form.component.css'],
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
export class ContractorFormComponent implements OnInit {
  formContractor: FormGroup;
  errorStateMatcher = new InstantErrorStateMatcher();
  hasSubmitted: boolean;

  constructor(private formDataService: FormDataService,
    private apiHttpService: ApiHttpService) {}

  ngOnInit(): void {
    this.formContractor = new FormGroup({
      contractorInformation: new FormGroup({
        
        lastName: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        firstName: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        middleInitial: new FormControl(null,
          Validators.pattern("[a-z A-Z]*")
          ),
        companyName: new FormControl(null,
          Validators.required
          ),
        companyEmailAddress: new FormControl(null,
          [Validators.required, Validators.email]
          ),
        companyStreetAddress: new FormControl(null,
          Validators.required
          ),
        city: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        state: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        zipCode: new FormControl(null,
          [Validators.required, Validators.minLength(5), Validators.maxLength(7), Validators.pattern("[0-9]*")]
          ),
        phoneNumber: new FormControl(null,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
          ),
      }),
      countyInformation: new FormGroup({
        contractWorkOrderNumber: new FormControl(null,
          Validators.required
          ),
        contractExpirationDate: new FormControl(null,
          [Validators.required] //Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]
          ),
        countyEmailAddress: new FormControl(null,
          [Validators.required, Validators.email]
          ),
        phoneNumber: new FormControl(null,
          [Validators.required, Validators.pattern("[0-9]{10}")]
          ),
        departmentName: new FormControl(null,
          Validators.pattern("[a-z A-Z]*")
          ),
        departmentNumber: new FormControl(null,
          Validators.pattern("[0-9]*")
          ),
        businessStreetAddress: new FormControl(null),
        businessCity: new FormControl(null,
          Validators.pattern("[a-z A-Z]*")
          ),
        businessZipCode: new FormControl(null,
          [Validators.minLength(5), Validators.maxLength(7), Validators.pattern("[0-9]*")]
          ),
      }),
      policyRulesInformation: new FormGroup ({
        applyDefaultCountywidePolicyIsChecked: new FormControl(null),
        departmentPolicyRule0IsChecked: new FormControl(null),
        departmentPolicyRule1IsChecked: new FormControl(null),
        departmentPolicyRule2IsChecked: new FormControl(null),
        departmentPolicyRule3IsChecked: new FormControl(null),
        departmentPolicyRule4IsChecked: new FormControl(null),
        socialNetworkingFacebookIsChecked: new FormControl(null),
        socialNetworkingTwitterIsChecked: new FormControl(null),
        socialNetworkingLinkedInIsChecked: new FormControl(null),
        typeOfRegistration: new FormControl(null, Validators.required),
      }),
      accessInformation: new FormGroup ({
        //IBM Data Center Access
        ibmChecked: new FormControl (null,
          ),
        ibmLogonId: new FormControl(null),
        majorGroupCode: new FormControl(null),
        lsoGroupCode: new FormControl(null),
        // Unix Environment Access
        unixChecked: new FormControl (null),
        unixTypeRequest: new FormControl (null),
        unixLogonId: new FormControl(null),
        application: new FormControl(null),
        accessGroup: new FormControl(null),
        accountNumber: new FormControl(null),
        // SecurID Remote Access
        secureidChecked: new FormControl (null),
        billingAccountNumber: new FormControl(null),
        accessType: new FormControl(null),
      })
    });

    this.hasSubmitted = false;
  }

  onClick(): void {
    
  }
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
