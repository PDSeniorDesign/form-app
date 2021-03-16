import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../core/services/admin.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  //smoother router transitions
})
export class AdminComponent implements OnInit {

  //to hide password
  hide = true;
  //sessionStorage
  adminSession: any;
  //boolena to show header
  showheader: boolean;
  //handle Error message to block out user: 404
  errorMessage: string;
  //alert boolean to show message
  alert: boolean = false;
  //admin login formGroup
  formLogin: FormGroup;
  returnUrl: string;
  currentPage: boolean;

  //if navigation to login page is successful, then don't show login header
  constructor(private router: Router, private adminService: AdminService, public route: ActivatedRoute) {
    
  }

  setCurrentPage = (response: boolean): void => {
    this.currentPage = true;
  };

  ngOnInit(): void {
    this.setCurrentPage(true);
    this.formLogin = new FormGroup ({
      password: new FormControl('',[Validators.required,]),
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl']
    || '/admin/service-requests';
    console.log(this.returnUrl);

  }

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
    this.adminService.adminPassword = this.formLogin.get('password').value;

    //call display request service: if 404 error from API, then redirected to login page
    this.adminService.display().subscribe(
      (res) => {

        //successful, then setSession
        sessionStorage.setItem(
          this.adminService.adminKeyName = 'password',
          this.formLogin.get('password').value.toString()
        );

        this.router.navigateByUrl(this.returnUrl);
        console.log(this.returnUrl);

        this.alert = false;
        //clear password input after logging in sucessful
        this.formLogin.reset();
      },
      (error) => {
        if (error.status == 403) {
          this.errorMessage = 'Invalid password entered';
          this.alert = true; 
        }
      }
    );
  }
}
