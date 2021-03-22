import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminService } from 'src/app/core/services/admin.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { FormDataService } from 'src/app/core/services/form-data.service';

@Component({
  selector: 'app-review-employee',
  templateUrl: './review-employee.component.html',
  styleUrls: ['./review-employee.component.css'],
})
export class ReviewEmployeeComponent implements OnInit {
  //mat-expander -- to allow to expand/open
  @ViewChild(MatAccordion) accordion: MatAccordion;

  //change tab
  selectedIndex = 0;
  //show application coordinator group if selected in original form 
  showApplicationCoord: boolean = false;

  errorStateMatcher = new InstantErrorStateMatcher();
  requestNumber: string;

  internetApplication: boolean;
  exchangeEmail: boolean;
  emailEncryption: boolean;
  tokenlessAuthentication: boolean;
  laCountyGovAccess: boolean;
  lacMobileWifiAccess: boolean;
  cherwellSms: boolean;
  windowsRightsMgmt: boolean;



  //approval FormGroup-manager, divisionChief, etc
  approval: FormGroup;
  constructor(
    private formDataService: FormDataService,
    private adminService: AdminService,
    private apiHttpService: ApiHttpService
  ) {}

  ngOnInit(): void {
    console.log(this.formDataService.formData);
    this.requestNumber = this.formDataService.formData.requestNumber;
    //console.log(this.formDataService.formData.internetApplication);

    this.internetApplication = this.formDataService.formData.internetApplication;
    this.exchangeEmail= this.formDataService.formData.exchangeEmail;
    this.emailEncryption= this.formDataService.formData.emailEncryption;
    this.tokenlessAuthentication= this.formDataService.formData.tokenlessAuthentication;
    this.laCountyGovAccess= this.formDataService.formData.laCountyGovAccess;
    this.lacMobileWifiAccess= this.formDataService.formData.lacMobileWifiAccess;;
    this.cherwellSms= this.formDataService.formData.cherwellSms;
    this.windowsRightsMgmt= this.formDataService.formData.windowsRightsMgmt;

    //if these fields are empty, then show
    if (this.formDataService.formData.ibmLogOnId !=null ||
       this.formDataService.formData.unixLogOnId != null ||
       this.formDataService.formData.billingAccountNumber != null) {
       this.showApplicationCoord = true;
    }


    //create the form group
    this.approval = new FormGroup({
      iscomplete: new FormControl(this.formDataService.formData.complete),

      personalInformation: new FormGroup({
        lastName: new FormControl(this.formDataService.formData.lastName, [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        firstName: new FormControl(this.formDataService.formData.firstName, [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        middleInitial: new FormControl(
          this.formDataService.formData.middleInitial,
          Validators.pattern('[a-z A-Z]*')
        ),
        emailAddress: new FormControl(
          this.formDataService.formData.employeeEmailAddress,
          [Validators.required, Validators.email]
        ),
        phoneNumber: new FormControl(
          this.formDataService.formData.businessPhoneNumber,
          [Validators.required, Validators.pattern('[0-9]{10}')]
        ),
      }),
      addressInformation: new FormGroup({
        address: new FormControl(
          this.formDataService.formData.businessStreetAddress,
          Validators.required
        ),
        city: new FormControl(this.formDataService.formData.businessCity, [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        state: new FormControl(this.formDataService.formData.businessState, [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        zipCode: new FormControl(this.formDataService.formData.businessZip, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(7),
          Validators.pattern('[0-9]*'),
        ]),
      }),
      employeeInformation: new FormGroup({
        employeeNumber: new FormControl(
          this.formDataService.formData.employeeNumber,
          [Validators.required]
        ),
        hostedId: new FormControl(
          this.formDataService.formData.hostedId,
          Validators.required
        ),
      }),

      accessInformation: new FormGroup({
        // IBM Data Center Access
        ibmLogonId: new FormControl(this.formDataService.formData.ibmLogOnId),
        majorGroupCode: new FormControl(
          this.formDataService.formData.majorGroupCode
        ),
        lsoGroupCode: new FormControl(
          this.formDataService.formData.lsoGroupCode
        ),
        securityAuthorization: new FormControl(
          this.formDataService.formData.securityAuthorization
        ),
        // Unix Environment Access
        unixLogonId: new FormControl(
          this.formDataService.formData.unixLogOnId
        ),
        application: new FormControl(
          this.formDataService.formData.unixApplication
        ),
        accessGroup: new FormControl(
          this.formDataService.formData.unixAccessGroup
        ),
        accountNumber: new FormControl(
          this.formDataService.formData.unixAccountNumber
        ),
        // SecurID Remote Access
        billingAccountNumber: new FormControl(
          this.formDataService.formData.billingAccountNumber
        ),
        accessType: new FormControl(null), // Not yet implemented on backend
      }),
      additionalInformation: new FormGroup({
        internetApplication: new FormControl(
          this.formDataService.formData.internetApplication
        ),
        exchangeEmail: new FormControl(
          this.formDataService.formData.exchangeEmail
        ),
        emailEncryption: new FormControl(
          this.formDataService.formData.emailEncryption
        ),
        laCountyGovAccess: new FormControl(
          this.formDataService.formData.laCountyGovAccess
        ),
        tokenlessAuthentication: new FormControl(
          this.formDataService.formData.tokenlessAuthentication
        ),
        lacMobileWifiAccess: new FormControl(
          this.formDataService.formData.lacMobileWifiAccess
        ),
        cherwellSms: new FormControl(
          this.formDataService.formData.cherwellSms
        ),
        windowsRightsMgmt: new FormControl(
          this.formDataService.formData.windowsRightsMgmt
        ),
      }),
      signatures: new FormGroup({
        applicationCoordinatorName: new FormControl(
          this.formDataService.formData.applicationCoordinatorName, [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        applicationCoordinatorPhone: new FormControl(
          this.formDataService.formData.applicationCoordinatorPhone, [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
        applicationCoordinatorEmail: new FormControl(
          this.formDataService.formData.applicationCoordinatorEmail, [
          Validators.required,
          Validators.email,
        ]),

        divChiefManagerName: new FormControl(
          this.formDataService.formData.divChiefManagerName, [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        divChiefManagerPhone: new FormControl(
          this.formDataService.formData.divChiefManagerPhone, [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
        divChiefManagerEmail: new FormControl(
          this.formDataService.formData.divChiefManagerEmail, [
          Validators.required,
          Validators.email,
        ]),

        deptInfoSecurityOfficerName: new FormControl(
          this.formDataService.formData.deptInfoSecurityOfficerName, [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        deptInfoSecurityOfficerPhone: new FormControl(
          this.formDataService.formData.deptInfoSecurityOfficerPhone, [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
        deptInfoSecurityOfficerEmail: new FormControl(
          this.formDataService.formData.deptInfoSecurityOfficerEmail, [
          Validators.required,
          Validators.email,
        ]),
      }),
    });
  }

  //not working yet-set complete to true
  startAdobeProcess= (): void => {
    //let comeplete = this.formDataService.formData.complete ;
    //console.log(this.approval.get("complete").setValue(comeplete));
    //this.approval.controls['complete'].setValue(true);
    this.adminService
    .saveForm(
      this.formDataService.formData.requestNumber,
      this.approval.value
    )
    .subscribe((res) => {
      console.log(res);
      this.formDataService.formData = res;
    });

  }

  showCheckBoolean(option: FormControl): Boolean {
    option = this.formDataService.formData.option
    return option.value;
  }


  onButtonChange(event: MatButtonToggleChange, nameOfOption: string): void {
    // Change to variable to represent the status of the button, whether clicked or not
    this[event.source.id] = event.source.checked;

    // Update form group
    this.approval
      .get(['additionalInformation', event.source.id])
      .setValue(this[event.source.id]);
  }

  

  //save button-save form
  saveForm = (): void => {
    this.adminService
      .saveForm(
        this.formDataService.formData.requestNumber,
        this.approval.value
      )
      .subscribe((res) => {
        //debug
        console.log(res);
        this.formDataService.formData = res;
      });
  }

  //print- debugging, prints out the formGroups
  print(): void {
    console.log(this.approval.value);
  }

  //closes all mat-expansion-panels
  closeAllPanels() {
    this.accordion.closeAll();
  }

  //opens all mat-expansion-panels
  openAllPanels() {
    this.accordion.openAll();
  }

  //to change tab based on button click
  selectTab(index: number): void {
    this.selectedIndex = index;
  }
}

// changes the ErrorStateMatcher to include dirty
// removes the error message and red boxes after clicking next
export class InstantErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control && control.invalid && (control.dirty || control.touched);
  }
}
