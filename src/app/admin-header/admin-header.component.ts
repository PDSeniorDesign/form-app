import { Component, OnInit } from '@angular/core';
import { AdminService } from '../core/services/admin.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  logOut(): void {
    this.adminService.logOut();
  }
}
