import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoutesRecognized } from '@angular/router';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      password: new FormControl('')
    });
  }

  onClick(): void {
    console.log(this.login.value);
  }


  //check if user exists by calling http.request
  //fucntion that acceect data:any. then if password == data.requestNumber
  //if not match error or not exits

  //ceate user. check it if exists, else create--redirect

}
