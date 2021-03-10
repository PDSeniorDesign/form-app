import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AdminService } from '../core/services/admin.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  //smoother router transitions
})
export class AdminComponent implements OnInit {
  //store admin password in ngModel directive
  adminPassword: any = '';
  //sessionStorage
  adminSession: any;
  //boolena to show header
  showheader: boolean;
  //handle Error message to block out user: 404
  error: HttpErrorResponse = null;

  //if navigation to login page is successful, then don't show login header
  constructor(private router: Router, private adminService: AdminService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        //if register or login page navigated, dont show
        if (
          event.url == '/admin/service-requests' ||
          //event.url == '//admin/service-requests/'
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
    //save user password to session storage
    this.adminService.adminPassword = this.adminPassword;
    this.adminPassword = sessionStorage.setItem(
      this.adminService.adminKeyName = 'password',
      this.adminPassword.toString()
    );
    
    //call display request service: if 404 error from API, then redirected to login page
    this.adminService.display().subscribe(
      (res) => {
        console.log(res);
        this.seeServiceRequest();
      },
      (error) => {
        if (error.status == 403) {
          this.isHomeRoute();
        }
      }
    );
  }
}
