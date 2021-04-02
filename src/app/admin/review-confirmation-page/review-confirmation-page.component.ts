import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationPageService } from 'src/app/core/services/confirmation-page.service';

@Component({
  selector: 'app-review-confirmation-page',
  templateUrl: './review-confirmation-page.component.html',
  styleUrls: ['./review-confirmation-page.component.css'],
})
export class ReviewConfirmationPageComponent implements OnInit {
  requestNumber: number;

  constructor(
    private confirmationPageService: ConfirmationPageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.requestNumber = this.confirmationPageService.requestNumber;
    // TODO: Make a guard for this. This is a temporary fix.
    if (this.requestNumber === undefined) {
      this.router.navigate(['admin/service-requests']);
    }
  }
}
