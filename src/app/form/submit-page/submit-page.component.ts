import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})
export class SubmitPageComponent implements OnInit {
  @Input() regForm;
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    console.log(this.regForm);
  }
}
