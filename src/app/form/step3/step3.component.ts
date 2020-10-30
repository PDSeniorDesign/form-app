import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
})
export class Step3Component implements OnInit {
  @Input() regForm: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
