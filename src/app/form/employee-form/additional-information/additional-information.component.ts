import { Component, Input, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css'],
})
export class AdditionalInformationComponent implements OnInit {
  // Functions from parent component (employee-form)
  @Input() printForm;
  @Input() save;

  // These variable represent if the user wants access to these items
  internetAccess: boolean = false;
  emailAccount: boolean = false;
  emailEncryption: boolean = false;
  laCountyAccess: boolean = false;
  tokenlessAuth: boolean = false;
  lacMobile: boolean = false;
  cherwellSMS: boolean = false;
  windowsManagement: boolean = false;

  // Options will be used for the chips
  options = new Set();

  constructor() {}

  ngOnInit(): void {}

  /**
   *
   * @param event This is the event that comes from the button. Contains information such as: checked
   * @param nameOfOption This is the name of the option to be added to the chiplist
   */
  onButtonChange(event: MatButtonToggleChange, nameOfOption: string): void {
    // Change to variable to represent the status of the button, whether clicked or not
    this[event.source.id] = event.source.checked;

    // Add the option to options, to be represented in the chiplist
    if (event.source.checked) {
      this.options.add(nameOfOption);
    } else {
      this.options.delete(nameOfOption);
    }
  }

  // FOR TESTING PURPOSES
  sampleFunction() {
    console.log('Internet Access: ', this.internetAccess);
    console.log('Email Account: ', this.emailAccount);
    console.log('Email Encryption: ', this.emailEncryption);
    console.log('La County Access: ', this.laCountyAccess);
    console.log('Tokenless Auth: ', this.tokenlessAuth);
    console.log('lacMobile: ', this.lacMobile);
    console.log('Cherwell', this.cherwellSMS);
    console.log('Windows: ', this.windowsManagement);
  }
}
