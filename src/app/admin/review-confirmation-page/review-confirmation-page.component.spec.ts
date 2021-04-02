import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewConfirmationPageComponent } from './review-confirmation-page.component';

describe('ReviewConfirmationPageComponent', () => {
  let component: ReviewConfirmationPageComponent;
  let fixture: ComponentFixture<ReviewConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewConfirmationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
