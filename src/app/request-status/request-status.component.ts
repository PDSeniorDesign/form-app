import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css'],
})
export class RequestStatusComponent implements OnInit {
  @Input() regForm;
  uuid: FormGroup;
  //hide table on default
  hideTable: boolean = false;
  //test: to access information form group
  informGroup: FormGroup;
  //test: new uuid random and store in array for testing
  randomU = uuidv4();
  rand = [];
  //test: array of the regForm group value
  regArray = [];
  id1 = 'ba048819-5157-42b6-ab48-f7bd6b9cf550';

  constructor(private fb: FormBuilder) {}

  //don't erase: use it once form is initalized
  applyFilter(filterValue: string) {
    this.generateuuid();
    //looks through all firstname field of regForm and then check if it matches the filterValue
    this.regArray.filter((i) =>
      i.value.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.uuid = this.fb.group({ uuidField: '' });
  }

  showTable() {
    //visible if clicked button
    this.hideTable = !this.hideTable;
  }

  generateuuid() {
    var id2 = '97795afa-3ade-4ad5-bf34-b396982535a5';
    var id3 = 'c1fc0798-1b02-4d4f-83bb-c1e2f805360d';

    this.regArray.push(this.id1);
    this.regArray.push(id2);
    this.regArray.push(id3);
  }

  onSubmit(): void {
    uuidv4();
    //this.informGroup = this.regForm.get('information');
    //this.informGroup.setValue({firstName: 'Nancy', lastName: 'Drew', middleInitial: 'B',
    //departmentName: 'Accounting',
    //departmentNumber: '345'});
    console.log(uuidv4());
    console.log('ba048819-5157-42b6-ab48-f7bd6b9cf550');
    //console.log(this.applyFilter('ba048819-5157-42b6-ab48-f7bd6b9cf550'));
    //console.log(this.regForm.value)
    //this.registrationData.push(this.regForm.value);
    //this.registrationData.push(this.uuid.value);
    //console.log(this.regForm.value);
    //console.log(this.informGroup.value);
    //console.log(this.ds.regisData.length);
  }
}
