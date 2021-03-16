import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  //update passwords
  @Input() currentPage;;
  hide1 = true;
  hide2 = true;
  resetForm: FormGroup;

  isSucess: boolean =false;
  isAlert: boolean=false;
  message: string;

  constructor(private adminService: AdminService, private router: Router) {}

  //check session storage
  ngOnInit(): void {
    //this.router.navigate(['/admin/reset-password']);
    if (this.adminService.adminKeyName != null) {
      this.router.navigate(['/admin/reset-password']);

    }
    this.currentPage = true;
    this.resetForm = new FormGroup ({
      oldPassword: new FormControl('', [Validators.required,]),
      newPassword: new FormControl('',[Validators.required,]),
    });
  }

  //reset password
  updatePassword() {

    this.adminService
      .resetPassword(this.resetForm.get('oldPassword').value, this.resetForm.get('newPassword').value)
      .subscribe((res) => {
        this.adminService.adminPassword = this.resetForm.get('newPassword').value;
        sessionStorage.setItem(this.adminService.adminKeyName, this.adminService.adminPassword.toString())
        this.isSucess = true;
        this.message = 'Password reset successful!';
      },
      (error) => {
        if(error.status == 403) {
          this.isAlert = true;
          this.message = 'Invalid current password';
        }
      });
      this.isSucess = false;
      this.isAlert = false;
  }
}
