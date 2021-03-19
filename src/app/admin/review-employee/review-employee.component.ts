import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-review-employee',
  templateUrl: './review-employee.component.html',
  styleUrls: ['./review-employee.component.css'],
})
export class ReviewEmployeeComponent implements OnInit {
  //mat-expander -- to allow to expand/open
  @ViewChild(MatAccordion) accordion: MatAccordion;

  //approval FormGroup-manager, divisionChief, etc
  approval: FormGroup;
  constructor() {}

  ngOnInit(): void {
    //create the form group
    this.approval = new FormGroup({
      manager: new FormGroup({
        managerName: new FormControl(''),
        managerPhone: new FormControl(''),
        managerEmail: new FormControl(''),
      }),
      departmentHead: new FormGroup ({
        departmentHeadName: new FormControl(''),
        departmentHeadPhone: new FormControl(''),
        departmentHeadEmail: new FormControl(''),
      }),
      applicationCoord: new FormGroup({
        applicationCoordName: new FormControl(''),
        applicationCoordPhone: new FormControl(''),
        applicationCoordEmail: new FormControl(''),
      }),
      divisionChief: new FormGroup({
        divisionChiefName: new FormControl(''),
        divisionChiefPhone: new FormControl(''),
        divisionChiefEmail: new FormControl(''),
      }),
      deptInfoSecurity: new FormGroup({
        deptInfoSecurityName: new FormControl(''),
        deptInfoSecurityPhone: new FormControl(''),
        deptInfoSecurityEmail: new FormControl(''),
      }),
    });
  }

  //print- debugging, prints out the formGroups
  print():void {
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
}
