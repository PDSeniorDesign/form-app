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
  divChief: Array<any>;
  deptInfo: Array<any>;
  deptHead: Array<any>;
  appCoord: Array<any>;

  allApprover: Array<any>;

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

  ngOnInit(): void {
    this.newApprover = new FormGroup({
      name: new FormControl(null, [Validators.pattern('[a-z A-Z]*')]),
      phone: new FormControl(null, [Validators.pattern('[0-9]{10}')]),
      email: new FormControl(null, [Validators.email]),
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  clear(): void {
    this.newApprover.reset();
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
