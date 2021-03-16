import { Component, OnInit,  ModuleWithComponentFactories, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css'],
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
export class ReviewRequestComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;

  //components needed to show html
  adminForm: FormGroup;
  requestNumber: any;
  errorStateMatcher = new InstantErrorStateMatcher();
  hasSubmitted: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.requestNumber = this.adminService.adminFormData.requestNumber;
    this.adminForm = new FormGroup({
      contractorInformation: new FormGroup({
        
        lastName: new FormControl(this.adminService.adminFormData.lastName,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        firstName: new FormControl(this.adminService.adminFormData.firstName,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        middleInitial: new FormControl(this.adminService.adminFormData.middleInitial,
          Validators.pattern("[a-z A-Z]*")
          ),
        companyName: new FormControl(this.adminService.adminFormData.companyName,
          Validators.required
          ),
        companyEmailAddress: new FormControl(this.adminService.adminFormData.companyEmailAddress,
          [Validators.required, Validators.email]
          ),
        companyStreetAddress: new FormControl(this.adminService.adminFormData.companyStreetAddress,
          Validators.required
          ),
        city: new FormControl(this.adminService.adminFormData.city,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        state: new FormControl(this.adminService.adminFormData.state,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        zipCode: new FormControl(this.adminService.adminFormData.zipCode,
          [Validators.required, Validators.minLength(5), Validators.maxLength(7), Validators.pattern("[0-9]*")]
          ),
        phoneNumber: new FormControl(this.adminService.adminFormData.phoneNumber,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
          ),
      }),
      countyInformation: new FormGroup({
        contractWorkOrderNumber: new FormControl(this.adminService.adminFormData.contractWorkOrderNumber,
          Validators.required
          ),
        contractExpirationDate: new FormControl(this.adminService.adminFormData.contractWorkOrderNumber,
          [Validators.required] //Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]
          ),
        countyEmailAddress: new FormControl(this.adminService.adminFormData.countyEmailAddress,
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
        applyDefaultCountywidePolicyIsChecked: new FormControl(false),
        departmentPolicyRule0IsChecked: new FormControl(false),
        departmentPolicyRule1IsChecked: new FormControl(false),
        departmentPolicyRule2IsChecked: new FormControl(false),
        departmentPolicyRule3IsChecked: new FormControl(false),
        departmentPolicyRule4IsChecked: new FormControl(false),
        socialNetworkingFacebookIsChecked: new FormControl(false),
        socialNetworkingTwitterIsChecked: new FormControl(false),
        socialNetworkingLinkedInIsChecked: new FormControl(false),
        typeOfRegistration: new FormControl(null),
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
      }),
      approval: new FormGroup ({
        //phones and emails of approvals
        countyDepartmentManager: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]),
        applicationCoordinatorName: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")],),
        managerName: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]),
        divisionChiefName: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]),
        departmentHeadName: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]),
        departmentInfoSecurity: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]),
        countyDepartmentManagerPhone: new FormControl(null,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        appicationPhone: new FormControl(null,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        managerPhone: new FormControl(null,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        divisionChiefPhone: new FormControl(null,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        departmentHeadPhone: new FormControl(null,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        deptInfoSecurityPhone: new FormControl(null,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        countyDeptEmail:  new FormControl(null,
          [Validators.required, Validators.email]),
        applicationEmail: new FormControl(null,
          [Validators.required, Validators.email]),
        managerEmail: new FormControl(null,
          [Validators.required, Validators.email]),
        divisionChiefEmail: new FormControl(null,
          [Validators.required, Validators.email]),
        departHeadEmail: new FormControl(null,
          [Validators.required, Validators.email]),
        departInfoEmail: new FormControl(null,
          [Validators.required, Validators.email]),
         
        
      }),
    });

    this.hasSubmitted = false;


    // if (this.adminService.adminFormData !== undefined) {

    //   this.requestNumber = this.adminService.adminFormData.requestNumber;

    //   this.form = new FormGroup ({
    //     personalInformation: new FormGroup ({
    //       lastName: new FormControl(this.adminService.adminFormData.lastName, 
    //         [Validators.required, Validators.pattern('[a-z A-Z]*')
    //       ]),
    //       firstName: new FormControl(this.adminService.adminFormData.firstName,
    //         [Validators.required, Validators.pattern('[a-z A-Z]*')])
    //     }),
    //     countyInformation: new FormGroup ({
    //       contractWorkOrderNumber: new FormControl(this.adminService.adminFormData.contractWorkOrderNumber,
    //         Validators.required
    //         ),
    //     }),
    //   });


    // }
  }
  viewSubmission(): void {
    console.log(this.adminForm.value);

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
