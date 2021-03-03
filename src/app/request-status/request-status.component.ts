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
  requestNumber: any;
  requestStatus: any;
  firstName: any;
  lastName: any;

  //save each request into array for display
  personData:Array<any> = [];

  constructor(private statusService: StatusService) {}

  //load array when component loaded
  ngOnInit(): void {
    this.statusService.display().subscribe((res)=>{
       console.log(res)
      this.personData = res});
  }

  //call service to display based on ID
  onClick(id: any): void {
    this.statusService.searchById(id).subscribe((res) => {
      this.parseObject(res);
    });
  }

  //debugging: view details on button click
  viewDetails(id: any): void {
    this.statusService.searchById(id).subscribe((res) => {
      console.log(res);
    });
  }

  //set properties and access them
  parseObject(data: any): void {
    this.requestNumber = data.requestNumber;
    this.requestStatus = data.requestStatus;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
