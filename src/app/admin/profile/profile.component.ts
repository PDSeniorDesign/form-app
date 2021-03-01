import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/core/services/status.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
<<<<<<< HEAD
  constructor() {}

  ngOnInit(): void {}
=======
  //update passwords
  oldPassword: any;
  newPassword: any;
  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
  }

  updatePass() {
    this.statusService.resetPass(this.oldPassword, this.newPassword).subscribe((res)=>{
      console.log(res)
      //console.log(newP)
    })
  }  

>>>>>>> admin
}
