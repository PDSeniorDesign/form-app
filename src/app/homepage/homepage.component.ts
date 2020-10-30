import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // (@Input) Allows us to recieve the form from
  // parent component
  @Input() regForm: FormGroup;

  // EMPLOYEE or CONTRACTOR
  formType: string;
 
  //forms that pertains to either EMPLOYEE or CONTRACTOR and represented as values
  employeeApplicationList: string[] = [
    'ISD Active Directory Hosted Registration Forms Permanent Employees',
    'ISD Downey Data Center Registration LA County Employees',
    'ISD Internet Registration Form Permanent Employees',
  ];

  vendorApplicationList: string[] = [
    'ISD Active Directory Hosted Registration Forms',
    'ISD Downey Data Center Registration LA County',
    'ISD Internet Registration Form',
  ];

  constructor(private router:Router) { }

  //to link button to form page
  goToForm(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

  onClickEmployee(): void {
    this.formType = 'EMPLOYEE';
    console.log(this.formType);
  }
  onClickContractor(): void {
    this.formType = 'CONTRACTOR';
    console.log(this.formType);
  }

  printValues(): void {
    console.log(this.regForm);
  }

}

