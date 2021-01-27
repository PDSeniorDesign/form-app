import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {
  @Input() regForm;
  constructor() { }

  ngOnInit(): void {
  }

}
