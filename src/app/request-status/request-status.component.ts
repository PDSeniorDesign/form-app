import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
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


  constructor(private apiHttpService: ApiHttpService,
    private statusService: StatusService) { }

  ngOnInit(): void {
  }

  onClick(id: any): void {
    //global to local to access id
    //doing GET request
    this.apiHttpService.getID(id)
      .subscribe((data: any) => {
        this.parseObject(data, id);
        console.log('data sent');
        //debugging
        console.log(data);
      });
  }

  parseObject(data: any, id: any): void {
    //get data from server in JSON string: ex: {"id":"", "firstName":"",...}
    var jsonObject = JSON.stringify(data);

    //get each pair in format {"id":""} then get only the value by key
    //finally set it to global parse varaiables for now
    this.id = JSON.parse(jsonObject);
    this.id = this.id.id;

    this.requestStatusParse = JSON.parse(jsonObject);
    this.requestStatusParse = this.requestStatusParse.requestStatus;

    this.firstNameParse = JSON.parse(jsonObject);
    this.firstNameParse = this.firstNameParse.firstName;

    this.lastNameParse = JSON.parse(jsonObject);
    this.lastNameParse = this.lastNameParse.lastName;
  }


}