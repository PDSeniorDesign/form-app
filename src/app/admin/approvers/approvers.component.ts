import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-approvers',
  templateUrl: './approvers.component.html',
  styleUrls: ['./approvers.component.css'],
})
export class ApproversComponent implements OnInit {
  //four arrays
  divChief: Array<any> = [];
  deptInfo: Array<any> = [];
  deptHead: Array<any> = [];
  appCoord: Array<any> = [];

  allApprover: Array<any> = [];

  //add user
  newApprover: FormGroup;

  //table data
  displayedColumns: string[] = ['Role', 'Name', 'Phone', 'Email'];
  dataSource: any;

  //alert
  sucess: boolean;

  //selection: new user
  selected = '';
  roles: string[] = [
    'Division Chief Manager',
    'Department Head',
    'Application Coordinator',
    'Department Info Security Officer',
  ];

  constructor(private adminService: AdminService, private router: Router) {}

  async ngOnInit() {
    this.newApprover = new FormGroup({
      name: new FormControl(null, [Validators.pattern('[a-z A-Z]*')]),
      phone: new FormControl(null, [Validators.pattern('[0-9]{10}')]),
      email: new FormControl(null, [Validators.email]),
    });
    this.allApprover = []
    await this.addToArray();
    await console.log(this.allApprover);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ///get all div. cheif, app_coord
  //add div cheif to div array
  //add div chief to all array
  //show allarray to table

  //add to each individual array, then concat for main table
  addToArray(): void {
    this.adminService.getAllDivChief().subscribe((res) => {
      this.divChief = res;
      //console.log(this.divChief);
      
    });
    this.adminService.getAllDeptHead().subscribe((res) => {
      this.deptHead = res;
      
    });
    this.adminService.getAllAppCoord().subscribe((res) => {
      this.appCoord = res;
      //this.allApprover.push(res);
    });
    this.adminService.getAllDeptInfoSec().subscribe((res) => {
      this.deptInfo = res;
      //this.allApprover.push(res);
      this.allApprover = this.divChief.concat(this.deptHead).concat(this.appCoord).concat(this.deptInfo);
      console.log(this.allApprover);
    });
  }


  //for edditing. check what role column it is, then call patch function

  clear(): void {
    this.newApprover.reset();
    this.addToArray();
  }
  //based on selection: do http.post
  add(): void {
    //post to division cheif
    if (this.selected == this.roles[0]) {
      this.adminService
        .postDivChief(this.newApprover.value)
        .subscribe((res) => {
          this.sucess = true;
          console.log(res);
        });
    } else if (this.selected == this.roles[1]) {
      this.adminService
        .postDeptHead(this.newApprover.value)
        .subscribe((res) => {
          this.sucess = true;
          console.log(res);
        });
    } else if (this.selected == this.roles[2]) {
      this.adminService
        .postAppCoord(this.newApprover.value)
        .subscribe((res) => {
          this.sucess = true;
          console.log(res);
        });
    } else if (this.selected == this.roles[3]) {
      this.adminService
        .postDeptInfoSec(this.newApprover.value)
        .subscribe((res) => {
          this.sucess = true;
          console.log(res);
        });
    }
  }
}
