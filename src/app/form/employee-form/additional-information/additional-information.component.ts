import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

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
