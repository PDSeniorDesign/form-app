import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormDataService } from 'src/app/core/services/form-data.service';

@Component({
  selector: 'app-service-requests',
  templateUrl: './service-requests.component.html',
  styleUrls: ['./service-requests.component.css'],
})
export class ServiceRequestsComponent implements OnInit {
  //access three variable in form: id, request status, first name, last name
  requestNumber: any;
  requestStatus: any;
  firstName: any;
  lastName: any;

  //request_ number to sent to employee...and contractor...
  request_number: any;

  //save each request into array for display
  @Input() personData: Array<any> = [];

  constructor(private adminService: AdminService, private router: Router, 
    public route: ActivatedRoute, private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.adminService.display().subscribe((res) => {
      console.log(res);
      this.personData = res;
    });
  }

  //Delete function later on
  //call service to display based on ID on button click
  onClick(id: any): void {
    this.adminService.searchById(id).subscribe((res) => {
      this.parseObject(res);
    });
  }

  //view details on button click
  viewDetails(id: any): void {
    this.adminService.searchById(id).subscribe((res) => {
      //debugging
      console.log(res);
      this.retrieveRequestNumber(res);
      //save res to adminFormdata to transfer between components
      this.adminService.adminFormData = res;
      this.formDataService.formData = res;
      console.log(this.adminService.adminFormData.requestNumber);

      //go to service request details page
      this.router.navigate(['/admin/service-request-detail']);
      

    });
  }

  edit(id: any): void {
    this.adminService.searchById(id).subscribe((res) => {
      console.log(res);
      this.retrieveRequestNumber(res);
      //save res to adminFormdata to transfer between components
      this.adminService.adminFormData = res;
      this.formDataService.formData = res;
      console.log(this.adminService.adminFormData.requestNumber);
      //if not employee -- go to contractor side
      //this.router.navigate(['/admin/service-request-detail']);
      
      if (this.adminService.adminFormData.employee == false) {
         this.router.navigate(['/admin/service-requests/review-request', this.formDataService.formData.requestNumber]);
       }
       //go to employee form , if true
       else if (this.adminService.adminFormData.employee == true) {
         this.router.navigate(['/admin/service-requests/review-employee', this.formDataService.formData.requestNumber ]);
        
       }
 
    });

  }

  //set requestNumber. 
  retrieveRequestNumber(data: any): void {
    this.requestNumber = data.requestNumber;
  }


  //if click

  //set properties and access them
  parseObject(data: any): void {
    this.requestNumber = data.requestNumber;
    this.requestStatus = data.requestStatus;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
