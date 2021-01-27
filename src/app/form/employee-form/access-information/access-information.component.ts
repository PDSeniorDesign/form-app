import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-information',
  templateUrl: './access-information.component.html',
  styleUrls: ['./access-information.component.css'],
})
export class AccessInformationComponent implements OnInit {
  renderIBMForm: boolean;
  constructor() {}

  ngOnInit(): void {
    this.renderIBMForm = false;
  }

  checkboxUpdate(e): void {
    // console.log('hello');
    switch (e.target.id) {
      case 'ibmCheckbox':
        // Will update variable with checkbox
        this.renderIBMForm = e.target.checked;
        break;
      default:
        console.log('default case');
    }
  }
}
