import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-review-employee',
  templateUrl: './review-employee.component.html',
  styleUrls: ['./review-employee.component.css'],
})
export class ReviewEmployeeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  //approval FormGroup-manager, divisionChief, etc
  approval: FormGroup;
  constructor() {}

  ngOnInit(): void {
    //create the form group
    this.approval = new FormGroup({
      manager: new FormGroup({
        name: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
      }),
      departmentHead: new FormGroup ({
        name: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
      }),
      applicationCoord: new FormGroup({
        name: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
      }),
      divisionChief: new FormGroup({
        name: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
      }),
      deptInfoSecurity: new FormGroup({
        name: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
      }),
    });
  }

  print():void {
    console.log(this.approval.value);
  }

  closeAllPanels() {
    this.accordion.closeAll();
  }
  openAllPanels() {
    this.accordion.openAll();
  }
}
