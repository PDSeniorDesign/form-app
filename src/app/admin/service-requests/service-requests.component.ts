import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-service-requests',
  templateUrl: './service-requests.component.html',
  styleUrls: ['./service-requests.component.css'],
})
export class ServiceRequestsComponent implements OnInit {
  @Input() regForm;
  //access three variable in form: id, request status, first name, last name
  requestNumber: any;
  requestStatus: any;
  firstName: any;
  lastName: any;

  //save each request into array for display
  @Input() personData: Array<any> = [];

  constructor(private adminService: AdminService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.adminService.display().subscribe((res) => {
      console.log(res);
      this.personData = res;
    });
  }

  //call service to display based on ID
  onClick(id: any): void {
    this.adminService.searchById(id).subscribe((res) => {
      this.parseObject(res);
    });
  }

  //debugging: view details on button click
  viewDetails(id: any): void {
    this.adminService.searchById(id).subscribe((res) => {
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
