import { Component, Input, OnInit } from '@angular/core';
import { StatusService } from 'src/app/core/services/status.service';
<<<<<<< HEAD
import { ApiHttpService } from 'src/app/core/services/api-http.service';
=======
import { ApiHttpService} from 'src/app/core/services/api-http.service';
>>>>>>> admin

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
  password: any;

  //save each request into array for display
<<<<<<< HEAD
  personData: Array<any> = [];

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusService.display().subscribe((res) => {
      console.log(res);
      this.personData = res;
    });
=======
  personData:Array<any> = [];

  constructor(private statusService: StatusService, private ApiHttpService: ApiHttpService) {}

  //load array when component loaded
  ngOnInit(): void {
    this.statusService.display().subscribe((res)=>{
       console.log(res)
      this.personData = res});
>>>>>>> admin
  }

  //call service to display based on ID
  onClick(id: any): void {
    this.statusService.searchById(id).subscribe((res) => {
      this.parseObject(res);
    });
  }

  //debugging: view details on button click
  viewDetails(id: any): void {
<<<<<<< HEAD
    this.statusService.searchById(id).subscribe((res) => {
      console.log(res);
    });
=======
    this.ApiHttpService.getFormByRequestNumber(id).subscribe((res) => {
      console.log(res)
    })
>>>>>>> admin
  }

  //set properties and access them
  parseObject(data: any): void {
    this.requestNumber = data.requestNumber;
    this.requestStatus = data.requestStatus;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
