import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractorInformationComponent } from './contractor-information.component';


describe('ContractorInformationComponent', () => {
  let component: ContractorInformationComponent;
  let fixture: ComponentFixture<ContractorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
