import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommunicationService } from './service/communication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'form-app';
  registrationForm: FormGroup;

  constructor(private svc: CommunicationService, private http: HttpClient) {
  }

  ngOnInit(): void {

    let obs = this.http.get(''); //Make a call request using a URL
    obs.subscribe(() => console.log('Got the response')) //obs.subscribe((response) => console.log(response))

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
