import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'form-app';
  applicationForm: FormGroup;
  flashMessage: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.applicationForm = this.fb.group({
      firstname: '',
      lastname: '',
    });
  }

  onSubmit(): void {
    console.log(this.applicationForm);
    // Saving values to localStorage
    localStorage.setItem(
      'applicationForm',
      JSON.stringify(this.applicationForm.value)
    );
    // Clearing the form
    this.applicationForm.setValue({
      firstname: '',
      lastname: '',
    });
    // Adding a flashMessage to show that
    // the form was submitted
    this.flashMessage = 'Form submitted!';
  }

  handleEditClick(event: Event): void {
    // TODO: If there is no form in localStorage => flash message
    // Read from localStorage
    const applicationFormLS = JSON.parse(
      localStorage.getItem('applicationForm')
    );
    this.applicationForm.setValue({
      firstname: applicationFormLS.firstname,
      lastname: applicationFormLS.lastname,
    });
  }
}
