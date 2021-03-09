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
  constructor() {}

  ngOnInit(): void {}

  sampleFunction() {
    console.log(this.internetAccess);
  }
}
