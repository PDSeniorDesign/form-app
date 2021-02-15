import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  //smoother router transitions
})
export class AdminComponent implements OnInit {

  //router-page count
  step: number;

  //store admin password
  adminPassword:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

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
    console.log(this.adminPassword);
  }

}
