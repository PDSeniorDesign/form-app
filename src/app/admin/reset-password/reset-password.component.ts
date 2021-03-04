import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  //update passwords
  oldPassword: any;
  newPassword: any;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  //reset password
  updatePassword() {
    this.adminService
      .resetPassword(this.oldPassword, this.newPassword)
      .subscribe((res) => {
        console.log(res);
        //console.log(newP)
      });
  }
}
