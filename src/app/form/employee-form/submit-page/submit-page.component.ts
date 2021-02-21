import { Component, Input, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { FormDataService } from 'src/app/core/services/form-data.service';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})

/**
 * An idea: check if form is saved to FormDataService in ngOnInit,
 * if so then make regForm the form in FormDataService. Will prevent the
 * need to have if else statement in onClick()
 */
export class SubmitPageComponent implements OnInit {
  @Input() regForm;
  @Input() setSubmitResponse; // Function to update parent (employee-form.component)
  stepper: any;
  
  constructor(
    private apiHttpService: ApiHttpService,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {}

  move(index: number) {
    this.stepper.selectedIndex = index;
  }

  onClick(): void {
    console.log(this.regForm.value); //debugging
    // If there is a form in formData then there is a form in progress
    if (this.formDataService.formData != undefined) {
      // Save the form
      this.apiHttpService
        .saveForm(
          this.formDataService.formData.requestNumber,
          this.regForm.value
        )
        .subscribe((res) => {
          console.log(res);
          // Set the formData to the response, might be needed somewhere else
          this.formDataService.formData = res;

          // Set the submitResponse so that the submit page renders
          this.setSubmitResponse(res);
        });

      // If the else statement executes, then the user probably didn't save their progress
      // as they were completing the form
    } else {
      this.apiHttpService.createForm(this.regForm.value).subscribe((res) => {
        console.log(res);
        this.setSubmitResponse(res);
      });
    }
  }
}
