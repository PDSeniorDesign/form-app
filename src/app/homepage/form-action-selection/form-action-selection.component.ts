/**
 * This component is responsible for deciding if form will be a new one,
 * or continued.
 */

import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-form-action-selection',
  templateUrl: './form-action-selection.component.html',
  styleUrls: ['./form-action-selection.component.css'],
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
export class FormActionSelectionComponent implements OnInit {
  showChoices: boolean;
  // Will toggle showing the prompt (from HomepageComponent)
  @Input() toggleMakingChoices;
  constructor() {}

  ngOnInit(): void {
    this.showChoices = true;
  }
  /**
   * Will toggle the show choices variable,
   * will be used for asking requestNumber
   */
  toggleShowChoices(): void {
    this.showChoices ? (this.showChoices = false) : (this.showChoices = true);
  }
}
