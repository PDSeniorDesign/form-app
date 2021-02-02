import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-county-information',
  templateUrl: './county-information.component.html',
  styleUrls: ['./county-information.component.css']
})
export class CountyInformationComponent implements OnInit {
  @Input() regForm;

  constructor() { }

  ngOnInit(): void {
  }

}
