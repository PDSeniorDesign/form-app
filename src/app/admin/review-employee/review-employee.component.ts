import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review-employee',
  templateUrl: './review-employee.component.html',
  styleUrls: ['./review-employee.component.css']
})
export class ReviewEmployeeComponent implements OnInit {
  
  employeeForm : FormGroup;

  constructor() { }

  ngOnInit(): void {

  
  }

}
