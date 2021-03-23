import { Component, OnInit } from '@angular/core';
import { ConfirmationPageService } from '../core/services/confirmation-page.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css'],
})
export class ConfirmationPageComponent implements OnInit {
  constructor(private confirmationPageService: ConfirmationPageService) {}

  ngOnInit(): void {
    console.log(this.confirmationPageService.requestNumber);
  }
}
