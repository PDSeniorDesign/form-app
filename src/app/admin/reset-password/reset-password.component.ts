import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  @Input() adminPassword;
  //update passwords
  oldPassword: string;
  newPassword: string;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  //reset password
  updatePassword() {
    this.adminService
      .resetPassword(this.oldPassword, this.newPassword)
      .subscribe((res) => {
        this.adminService.adminPassword = this.newPassword;
        sessionStorage.setItem(this.adminService.adminKeyName, this.adminService.adminPassword.toString())
      });
  }
}
