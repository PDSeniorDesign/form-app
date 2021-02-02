import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyInformationComponent } from './county-information.component';

describe('CountyInformationComponent', () => {
  let component: CountyInformationComponent;
  let fixture: ComponentFixture<CountyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
