import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin.service';
import { FormDataService } from 'src/app/core/services/form-data.service';

@Component({
  selector: 'app-review-employee',
  templateUrl: './review-employee.component.html',
  styleUrls: ['./review-employee.component.css']
})
export class ReviewEmployeeComponent implements OnInit {
  
  //route subscription to capture requestNubmer
  private routeSub: Subscription;
  employeeForm : FormGroup;
  requestNumber: any;

  constructor(private adminService: AdminService, private route: ActivatedRoute, private formDataService: FormDataService) { }

  ngOnInit(): void {

    //call in adminservice
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['requestNumber']) //log the value of requestNumber
      this.requestNumber = params['requestNumber'];
    });
    this.adminService.searchById(this.requestNumber).subscribe((res) => {

      this.formDataService.formData = res;
    });

    //console.log('from comp', this.adminService.adminFormData);
    //this.requestNumber = this.adminService.adminFormData.requestNumber;
    //console.log(this.requestNumber)



    //this.adminService.
  }

}
