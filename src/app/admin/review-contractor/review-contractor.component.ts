import { Component, OnInit,  ModuleWithComponentFactories, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-review-contractor',
  templateUrl: './review-contractor.component.html',
  styleUrls: ['./review-contractor.component.css'],
})
export class ReviewRequestComponent implements OnInit {
  //@ViewChild('stepper') private myStepper: MatStepper;

  //components needed to show html
  adminForm: FormGroup;
  requestNumber: any;
  //errorStateMatcher = new InstantErrorStateMatcher();
  hasSubmitted: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }
  


//changes the ErrorStateMatcher to include dirty
//removes the error message and red boxes after clicking next
// export class InstantErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(
//     control: FormControl | null,
//     form: FormGroupDirective | NgForm | null
//   ): boolean {
//     return control && control.invalid && (control.dirty || control.touched);
//   }
}
