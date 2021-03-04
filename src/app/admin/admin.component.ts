import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AdminService } from '../core/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  //smoother router transitions
})
export class AdminComponent implements OnInit {
  //store admin password
  adminPassword: any = '';
  //sessionStorage
  adminSession: any;
  //boolena to show header
  showheader: boolean;
  //backend password
  backendP: any = 'hello';

  //if navigation to login page is successful, then don't show login header
  constructor(private router: Router, private adminService: AdminService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        //if register or login page navigated, dont show
        if (
          event.url == '/admin/service-requests' ||
          event.url == '/admin/reset-password'
        ) {
          this.showheader = false;
        } else {
          this.showheader = true;
        }
      }
    });
  }

  ngOnInit(): void {}

  //navigate to request status page
  seeServiceRequest() {
    return this.router.navigate(['/admin/service-requests']);
  }

  //navigate to reset password
  seeResetPassword() {
    return this.router.navigate(['/admin/reset-password']);
  }

  isHomeRoute() {
    return this.router.url === '/admin';
  }

  adminLogin(): void {
    //check against password

    if (this.adminPassword.toString() == this.backendP.toString()) {
      //this.statusService.login(JSON.parse(this.adminPassword)).subscribe((res) => {
      // console.log(res)
      // this.statusService.adminPassword = res;
      // });

      this.adminService.adminPassword = this.adminPassword;
      this.adminPassword = sessionStorage.setItem(
        'adminPassword',
        this.adminPassword.toString()
      );
      console.log(sessionStorage.getItem('adminPassword'));
      this.seeServiceRequest();
    }
  }
}
