  
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component implements OnInit {
  @Input() regForm: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
