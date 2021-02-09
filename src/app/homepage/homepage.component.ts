import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  makingFormChoice: boolean;
  constructor() {}

  ngOnInit(): void {
    this.makingFormChoice = false;
  }
  /** Will switch makingFormChoice to
   * true, which will render form-action-selection
   */
  toggleMakingChoices(): void {
    this.makingFormChoice = true;
  }
}
