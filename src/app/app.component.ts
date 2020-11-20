import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommunicationService } from './service/communication.service';

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
