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
  /**
   * @description this variable is responsible for keeping track
   * of the steps. (0 = homepage, 1 = Asking the user's type, 2 = Asking if
   * continuing a form or creating a new one, 3 = Getting the request number, if continuing
   * form)
   *
   */
  stepCounter: number;

  // Whether the user is an employee or contractor
  userType: string;
  // Whether the user will continue a form or create a new one
  continueForm: boolean;
  // Where we will store request number
  requestNumber: number;
  constructor() {}

  ngOnInit(): void {
    // Will render homepage by default
    this.stepCounter = 0;
  }
  /**
   *  TODO: Add conditionals to prevent step from going below -1 or
   * higher than 3
   */
  nextStep(): void {
    this.stepCounter += 1;
  }
  previousStep(): void {
    this.stepCounter -= 1;
  }
}
