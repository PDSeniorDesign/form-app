import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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
  // handle Error message to block out user: 404
  errorMessage: string;
  // alert boolean to show message
  alert = false;
  // admin login formGroup
  formLogin: FormGroup;

  // if navigation to login page is successful, then don't show login header
  constructor(
    private router: Router,
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

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
    this.adminService.setAdminCredentials(
      this.formLogin.get('password').value.toString()
    );

    // call display request service: if 404 error from API, then redirected to login page
    this.adminService.display().subscribe({
      next:() => {

        // get return url from query parameters or default to home page
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/service-requests';
        this.router.navigateByUrl(returnUrl)
        //this.seeServiceRequest();
        this.alert = false;
        // clear password input after logging in sucessful
        this.formLogin.reset();

        // Let the rest of the app know that the admin has logged in
        this.adminService.emitAdminLoggedInChange(true);
      },
      error: error => {
        if (error.status === 403) {
          this.errorMessage = 'Invalid password entered';
          this.alert = true;
          this.isHomeRoute();
        }
      }});
  }
}
