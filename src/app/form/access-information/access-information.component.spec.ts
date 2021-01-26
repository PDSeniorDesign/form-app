import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessInformationComponent } from './access-information.component';

describe('AccessInformationComponent', () => {
  let component: AccessInformationComponent;
  let fixture: ComponentFixture<AccessInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
