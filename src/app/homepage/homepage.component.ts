import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

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
  selectEmployee(): void {
    this.userType = 'employee';
  }
  selectContractor(): void {
    this.userType = 'contractor';
  }
  selectContinueForm(): void {
    this.continueForm = true;
  }
  // TODO: test this method
  // TODO: possible edge case, the user type was never set
  /** If the user calls this function it means they are ready to redirect. */
  selectNewForm(): void {
    this.continueForm = false;
    if (this.userType === 'employee') {
      // navigate to the employee route
      this.router.navigate(['/employee-form']);
    } else if (this.userType === 'contractor') {
      // navigate to the contractor route
      this.router.navigate(['/contractor-form']);
    }
    this.continueForm = false;
  }
  // testing
  printRequestNumber(): void {
    console.log(this.requestNumber);
  }
}
