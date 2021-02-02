import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent implements OnInit {
  @Input() regForm;
  constructor() {}

  ngOnInit(): void {}

  // For debugging purposes
  onClick(): void {
    console.log('hello');
  }
}
