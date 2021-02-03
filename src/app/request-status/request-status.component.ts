import { Component, Input, OnInit } from '@angular/core';
import { StatusService } from 'src/app/core/services/status.service';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css'],
})
export class RequestStatusComponent implements OnInit {
  @Input() regForm;
  //access three variable in form: id, request status, first name, last name
  id: any;
  requestStatusParse: any;
  firstNameParse: any;
  lastNameParse: any;


  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
  }

  onClick(id: any): void {
    //global to local to access id
    //doing GET request
    this.statusService.searchGetID(id).subscribe(res => {
      this.parseObject(res, id);
      });    
  }

  //turn information to JSON and parse to display individual properties
  parseObject(data: any, id: any): void {
    const jsonObject = JSON.stringify(data);
    
    this.id = JSON.parse(jsonObject);
    this.id = this.id.id;

    this.requestStatusParse = JSON.parse(jsonObject);
    this.firstNameParse = JSON.parse(jsonObject);
    this.lastNameParse = JSON.parse(jsonObject);

    this.requestStatusParse = this.requestStatusParse.requestStatus;
    this.firstNameParse = this.firstNameParse.firstName;
    this.lastNameParse = this.lastNameParse.lastName;
  }


}