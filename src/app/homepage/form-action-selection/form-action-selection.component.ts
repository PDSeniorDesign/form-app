/**
 * This component is responsible for deciding if form will be a new one,
 * or continued.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-action-selection',
  templateUrl: './form-action-selection.component.html',
  styleUrls: ['./form-action-selection.component.css'],
})
export class FormActionSelectionComponent implements OnInit {
  showChoices: boolean;
  constructor() {}

  ngOnInit(): void {
    this.showChoices = true;
  }
}
