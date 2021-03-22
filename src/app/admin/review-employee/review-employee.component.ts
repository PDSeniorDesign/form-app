import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
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

  //approval FormGroup-manager, divisionChief, etc
  approval: FormGroup;
  constructor(
    private formDataService: FormDataService,
    private apiHttpService: ApiHttpService
  ) {}

  ngOnInit(): void {
    console.log(this.formDataService.formData);

    //if these fields are empty, then show
    if (this.formDataService.formData.ibmLogOnId !=null ||
       this.formDataService.formData.unixLogOnId != null ||
       this.formDataService.formData.billingAccountNumber != null) {
       this.showApplicationCoord = true;

    }

    //create the form group
    this.approval = new FormGroup({
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
      // accessInformation: new FormGroup({
      //   // IBM Data Center Access
      //   ibmLogonId: new FormControl(this.formDataService.formData.ibmLogOnId),
      //   majorGroupCode: new FormControl(
      //     this.formDataService.formData.majorGroupCode
      //   ),
      //   lsoGroupCode: new FormControl(
      //     this.formDataService.formData.lsoGroupCode
      //   ),
      //   securityAuthorization: new FormControl(
      //     this.formDataService.formData.securityAuthorization
      //   ),
      //   // Unix Environment Access
      //   unixLogonId: new FormControl(
      //     this.formDataService.formData.unixLogOnId
      //   ),
      //   application: new FormControl(
      //     this.formDataService.formData.unixApplication
      //   ),
      //   accessGroup: new FormControl(
      //     this.formDataService.formData.unixAccessGroup
      //   ),
      //   accountNumber: new FormControl(
      //     this.formDataService.formData.unixAccountNumber
      //   ),
      //   // SecurID Remote Access
      //   billingAccountNumber: new FormControl(
      //     this.formDataService.formData.billingAccountNumber
      //   ),
      //   accessType: new FormControl(null), // Not yet implemented on backend
      // }),
      signatures: new FormGroup({
        applicationCoordinatorName: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        applicationCoordinatorPhone: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
        applicationCoordinatorEmail: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),

        divChiefManagerName: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        divChiefManagerPhone: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
        divChiefManagerEmail: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),

        deptInfoSecurityOfficerName: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
        ]),
        deptInfoSecurityOfficerPhone: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
        deptInfoSecurityOfficerEmail: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
      }),
    });
  }

  //save button-save form
  saveForm(): void {
    this.apiHttpService
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
