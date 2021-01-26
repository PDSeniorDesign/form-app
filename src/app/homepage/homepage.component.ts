import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormUserType } from '../form/models/FormUserType';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // EMPLOYEE or CONTRACTOR
  formName: FormGroup;
  formUserType: FormUserType;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formName = new FormGroup({
      formName: new FormControl(null),
    });
  }
}
