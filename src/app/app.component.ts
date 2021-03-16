import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() currentPage;
  @Input() returnUrl;
  title = 'form-app';
  registrationForm: FormGroup;
  showheader: boolean;
  
  //if navigation to admin login page is successful, then don't show normal header for admin functions
  constructor (private router: Router) {
    
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/admin' || event.url == '/admin/service-requests' ||
         event.url == '/admin/reset-password' 
         || event.url == '/admin/review-request' || event.url == '/admin/service-request-detail'
         || event.url == '/admin/review-employee' 
         )  {
          this.showheader= false;

        }
        else {
          this.showheader= true;
        }

      }
    });
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      applicationName: new FormGroup({
        name: new FormControl(null),
      }),
      contactDetails: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null),
      }),
    });
  }
}
