import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor-information',
  templateUrl: './contractor-information.component.html',
  styleUrls: ['./contractor-information.component.css'],
})
export class ContractorInformationComponent implements OnInit {
  @Input() regForm;

  constructor() {}
  ngOnInit(): void {}
}
