import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormType } from '../form/models/FormType';
import { FormUserType } from '../form/models/FormUserType';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // EMPLOYEE or CONTRACTOR
  formName: FormGroup;
  formUserType: FormUserType;

  // Used by template
  public get FormUserType() {
    return FormUserType;
  }

  //forms that pertains to either EMPLOYEE or CONTRACTOR and represented as values
  employeeApplicationList = [
    {
      text:
        'ISD Active Directory Hosted Registration Forms Permanent Employees',
      value:
        FormType.ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_PERMANENT_EMPLOYEES,
    },
    {
      text: 'ISD Downey Data Center Registration LA County Employees',
      value: FormType.ISD_DOWNEY_DATA_CENTER_REGISTRATION_LA_COUNTY_EMPLOYEES,
    },
    {
      text: 'ISD Internet Registration Form Permanent Employees',
      value: FormType.ISD_INTERNET_REGISTRATION_FORM_PERMANENT_EMPLOYEES,
    },
  ];

  vendorApplicationList = [
    {
      text: 'ISD Active Directory Hosted Registration Forms',
      value:
        FormType.ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_CONTRACTOR_AND_VENDORS,
    },
    {
      text: 'ISD Downey Data Center Registration LA County',
      value:
        FormType.ISD_DOWNEY_DATA_CENTER_REGISTRATION_CONTRACTORS_AND_AND_VENDORS,
    },
    {
      text: 'ISD Internet Registration Form',
      value: FormType.ISD_INTERNET_REGISTRATION_FORM_CONTRACTORS_AND_VENDORS,
    },
  ];

  constructor(private router: Router) {}

  //to link button to form page
  goToForm(): void {
    this.router.navigate(['/form'], {
      queryParams: { formName: this.formName.value.formName },
    });
  }

  ngOnInit(): void {
    this.formName = new FormGroup({
      formName: new FormControl(null),
    });
  }

  onClickEmployee(): void {
    this.formUserType = FormUserType.EMPLOYEE;
    console.log(this.formName);
  }
  onClickContractor(): void {
    this.formUserType = FormUserType.CONTRACTOR;
    console.log(this.formName);
  }

  printValues(): void {
    console.log(this.formName.value);
    console.log(
      FormType.ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_CONTRACTOR_AND_VENDORS
    );
  }
}
