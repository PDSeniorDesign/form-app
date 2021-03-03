import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { StatusService } from '../core/services/status.service';

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

  //if navigation to login page is successful, then don't show header
  constructor(private router: Router, private statusService: StatusService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        //if register or login page navigated, dont show
        if (
          event.url == '/admin/request-status' ||
          event.url == '/admin/profile'
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
  seeRequest() {
    return this.router.navigate(['/admin/request-status']);
  }

  //navigate to profile page
  seeProfile() {
    return this.router.navigate(['/admin/profile']);
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

      this.statusService.adminPassword = this.adminPassword;
      this.adminPassword = sessionStorage.setItem(
        'adminPassword',
        this.adminPassword.toString()
      );
      console.log(sessionStorage.getItem('adminPassword'));
      this.seeProfile();
    }
  }
}
