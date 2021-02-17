import { Component, Input, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})
export class SubmitPageComponent implements OnInit {
  @Input() regForm;
  @Input() setSubmitResponse; // Function to update parent (employee-form.component)
  constructor(private apiHttpService: ApiHttpService) {}

  ngOnInit(): void {}

  onClick(): void {
    console.log(this.regForm.value); //debugging
    this.apiHttpService
      .createForm((this.regForm.value))
      .subscribe((res) => {
        console.log(res);
        this.setSubmitResponse(res);
      });
  }


}
