import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})
export class SubmitPageComponent implements OnInit {
  @Input() regForm;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  // For debugging purposes
  onClick(): void {
    // Example of request (Observable)
    this.apiService.getSample().subscribe(res => console.log(res))
    console.log(JSON.stringify(this.regForm.value));
  }
}
