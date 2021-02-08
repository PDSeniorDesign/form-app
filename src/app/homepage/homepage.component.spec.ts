import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have makingFormChoice be false by default', () => {
    expect(component.makingFormChoice).toBeFalse();
  });
  it('should render the homepage as default', () => {
    const jumbotronTitle = fixture.debugElement.query(By.css('h1.display-4'))
      .nativeElement;
    expect(jumbotronTitle.innerText).toContain('Office of Public Defender');
  });
  it('should render form action component when makingFormChoice is set to true', () => {
    component.makingFormChoice = true;
    fixture.detectChanges();
    const pTag = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(pTag.innerText).toContain('form-action-selection works!');
  });
});
