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
  requestStatus: any;
  firstName: any;
  lastName: any;

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {}

  //call service to display based on ID
  onClick(id: any): void {
    this.statusService.searchById(id).subscribe((res) => {
      this.parseObject(res);
    });
  }

  //set properties and access them
  parseObject(data: any): void {
    this.id = data.id;
    this.requestStatus = data.requestStatus;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
