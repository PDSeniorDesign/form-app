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
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-review-employee',
  templateUrl: './review-employee.component.html',
  styleUrls: ['./review-employee.component.css'],
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
export class ReviewEmployeeComponent implements OnInit {
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

  //selections arrays
  divCheifList: Array<any>;
  deptHeadList: Array<any>;
  appCoordList: Array<any>;
  deptInfoList: Array<any>;

  //selected value
  selectedValue: any;

  //approval FormGroup-manager, divisionChief, etc
  approval: FormGroup;
  constructor(
    private formDataService: FormDataService,
    private adminService: AdminService,
    private apiHttpService: ApiHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('requestNumber');
    console.log(heroId);
    this.loadForm(heroId);

    //console.log(this.formDataService.formData);
    this.requestNumber = this.formDataService.formData.requestNumber;
    //console.log(this.formDataService.formData.internetApplication);

    this.internetApplication = this.formDataService.formData.internetApplication;
    this.exchangeEmail = this.formDataService.formData.exchangeEmail;
    this.emailEncryption = this.formDataService.formData.emailEncryption;
    this.tokenlessAuthentication = this.formDataService.formData.tokenlessAuthentication;
    this.laCountyGovAccess = this.formDataService.formData.laCountyGovAccess;
    this.lacMobileWifiAccess = this.formDataService.formData.lacMobileWifiAccess;
    this.cherwellSms = this.formDataService.formData.cherwellSms;
    this.windowsRightsMgmt = this.formDataService.formData.windowsRightsMgmt;

    //get all selections to display
    this.getDivChiefList();
    this.getDeptHead();
    this.getAppCoord();
    this.getDeptInfo();

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
        unixLogonId: new FormControl(this.formDataService.formData.unixLogOnId),
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
        cherwellSms: new FormControl(this.formDataService.formData.cherwellSms),
        windowsRightsMgmt: new FormControl(
          this.formDataService.formData.windowsRightsMgmt
        ),
      }),
      signatures: new FormGroup({
        applicationCoordinatorName: new FormControl(
          this.formDataService.formData.applicationCoordinatorName
        ),
        applicationCoordinatorPhone: new FormControl(
          this.formDataService.formData.applicationCoordinatorPhone
        ),
        applicationCoordinatorEmail: new FormControl(
          this.formDataService.formData.applicationCoordinatorEmail
        ),

        divChiefManagerName: new FormControl(
          this.formDataService.formData.divChiefManagerName
        ),
        divChiefManagerPhone: new FormControl(
          this.formDataService.formData.divChiefManagerPhone
        ),
        divChiefManagerEmail: new FormControl(
          this.formDataService.formData.divChiefManagerEmail
        ),

        deptInfoSecurityOfficerName: new FormControl(
          this.formDataService.formData.deptInfoSecurityOfficerName
        ),
        deptInfoSecurityOfficerPhone: new FormControl(
          this.formDataService.formData.deptInfoSecurityOfficerPhone
        ),
        deptInfoSecurityOfficerEmail: new FormControl(
          this.formDataService.formData.deptInfoSecurityOfficerEmail
        ),
        departmentHeadName: new FormControl(
          this.formDataService.formData.departmentHeadName
        ),
        departmentHeadPhone: new FormControl(
          this.formDataService.formData.departmentHeadPhone
        ),
        departmentHeadEmail: new FormControl(
          this.formDataService.formData.departmentHeadEmail
        ),
      }),
    });
  }

  debug(): void {
    console.log(this.approval);
    //console.log(this.formDataService.formData);
  }

  //set to approval form here for mat-select signatures
  setSelectedValue(type: string, id: number): void {
    if (type == 'divisionChief') {
      if (id == null) {
        this.approval.get('signatures.divChiefManagerPhone').patchValue(null);
        this.approval.get('signatures.divChiefManagerEmail').patchValue(null);
      } else {
        this.adminService.getDivChief(id).subscribe((res) => {
          this.approval
            .get('signatures.divChiefManagerPhone')
            .patchValue(res.phone);
          this.approval
            .get('signatures.divChiefManagerEmail')
            .patchValue(res.email);
        });
      }
    } else if (type == 'departmentHead') {
      if (id == null) {
        this.approval.get('signatures.departmentHeadPhone').patchValue(null);
        this.approval.get('signatures.departmentHeadEmail').patchValue(null);
      } else {
        this.adminService.getDeptHead(id).subscribe((res) => {
          this.approval
            .get('signatures.departmentHeadPhone')
            .patchValue(res.phone);
          this.approval
            .get('signatures.departmentHeadEmail')
            .patchValue(res.email);
        });
      }
    } else if (type == 'appCoord') {
      if (id == null) {
        this.approval
          .get('signatures.applicationCoordinatorPhone')
          .patchValue(null);
        this.approval
          .get('signatures.applicationCoordinatorEmail')
          .patchValue(null);
      } else {
        this.adminService.getAppCoord(id).subscribe((res) => {
          this.approval
            .get('signatures.applicationCoordinatorPhone')
            .patchValue(res.phone);
          this.approval
            .get('signatures.applicationCoordinatorEmail')
            .patchValue(res.email);
        });
      }
    } else {
      if (id == null) {
        this.approval
          .get('signatures.deptInfoSecurityOfficerPhone')
          .patchValue(null);
        this.approval
          .get('signatures.deptInfoSecurityOfficerEmail')
          .patchValue(null);
      } else {
        this.adminService.getDeptInfoSec(id).subscribe((res) => {
          this.approval
            .get('signatures.deptInfoSecurityOfficerPhone')
            .patchValue(res.phone);
          this.approval
            .get('signatures.deptInfoSecurityOfficerEmail')
            .patchValue(res.email);
        });
      }
    }
  }

  getDivChiefList() {
    this.adminService.getAllDivChief().subscribe((res) => {
      this.divCheifList = res;
    });
  }

  getDeptHead() {
    this.adminService.getAllDeptHead().subscribe((res) => {
      this.deptHeadList = res;
    });
  }

  getAppCoord() {
    this.adminService.getAllAppCoord().subscribe((res) => {
      this.appCoordList = res;
    });
  }

  getDeptInfo() {
    this.adminService.getAllDeptInfoSec().subscribe((res) => {
      this.deptInfoList = res;
    });
  }

  createApprovalForm(): void {
    this.requestNumber = this.formDataService.formData.requestNumber;
    console.log('Create AP');
    console.log(this.formDataService.formData.requestNumber);
  }

  //load form from param
  loadForm(requestNumber: any): void {
    this.adminService.searchById(requestNumber).subscribe((res) => {
      this.formDataService.formData = res;
      console.log(res);
      console.log(this.formDataService.formData.requestNumber);
    });
  }

  //not working yet-set complete to true
  startAdobeProcess = (): void => {
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
  };

  showCheckBoolean(option: FormControl): Boolean {
    option = this.formDataService.formData.option;
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
  save = (): void => {
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
  };
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
