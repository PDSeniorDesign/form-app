import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'form-app';
  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        mi: new FormControl(null),
        lastname: new FormControl(null, Validators.required),
      }),
      contactDetails: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null),
      }),
    });
  }
}
