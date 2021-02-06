import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  typeUser: FormGroup;

  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
    this.typeUser = new FormGroup({
      options: new FormControl(''),
      // the value type (string) should match
     });
  }

  onClick(): void {
    console.log(this.typeUser.value);
  }

}
