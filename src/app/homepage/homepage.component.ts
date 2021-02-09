import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '400ms',
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '400ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
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
  toggleMakingChoices = () => {
    this.makingFormChoice
      ? (this.makingFormChoice = false)
      : (this.makingFormChoice = true);
  };
}
