import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AdminService } from '../core/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // smoother router transitions
})
export class AdminComponent implements OnInit {
  // to hide password
  hide = true;
  // sessionStorage
  adminSession: any;
  // boolena to show header
  showheader: boolean;
  // handle Error message to block out user: 404
  errorMessage: string;
  // alert boolean to show message
  alert = false;
  // admin login formGroup
  formLogin: FormGroup;

  // if navigation to login page is successful, then don't show login header
  constructor(private router: Router, private adminService: AdminService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // if register or login page navigated, dont show
        if (
          event.url === '/admin/service-requests' ||
          // event.url == '//admin/service-requests/'
          event.url === '/admin/reset-password' ||
          event.url === '/admin/review-request' ||
          event.url === '/admin/service-request-details'
        ) {
          this.showheader = false;
        } else {
          this.showheader = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      password: new FormControl('', [Validators.required]),
    });
  }

  // navigate to request status page
  seeServiceRequest(): Promise<boolean> {
    return this.router.navigate(['/admin/service-requests']);
  }

  // navigate to reset password
  seeResetPassword(): Promise<boolean> {
    return this.router.navigate(['/admin/reset-password']);
  }

  isHomeRoute(): boolean {
    return this.router.url === '/admin';
  }

  adminLogin(): void {
    // save user password to session storage
    this.adminService.adminPassword = this.formLogin.get('password').value;
    sessionStorage.setItem(
      (this.adminService.adminKeyName = 'password'),
      this.formLogin.get('password').value.toString()
    );

    // call display request service: if 404 error from API, then redirected to login page
    this.adminService.display().subscribe(
      (res) => {
        this.seeServiceRequest();
        this.alert = false;
        // clear password input after logging in sucessful
        this.formLogin.reset();
      },
      (error) => {
        if (error.status === 403) {
          this.errorMessage = 'Invalid password entered';
          this.alert = true;
          this.isHomeRoute();
        }
      }
    );
  }
}
