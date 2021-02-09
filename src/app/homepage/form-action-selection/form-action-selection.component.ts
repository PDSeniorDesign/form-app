/**
 * This component is responsible for deciding if form will be a new one,
 * or continued.
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-action-selection',
  templateUrl: './form-action-selection.component.html',
  styleUrls: ['./form-action-selection.component.css'],
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
