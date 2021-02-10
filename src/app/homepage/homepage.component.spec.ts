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
  it('should have userType variable', () => {
    expect(component.userType).toBeUndefined();
  });
  it('should have continueForm variabe', () => {
    expect(component.continueForm).toBeUndefined();
  });
  it('should have requestNumber variable', () => {
    expect(component.requestNumber).toBeUndefined();
  });
  it('should have stepCounter variable and should be set to 0', () => {
    expect(component.stepCounter).toBe(0);
  });
  it('should render the homepage as default (step 0)', () => {
    const jumbotronTitle = fixture.debugElement.query(By.css('h1.display-4'))
      .nativeElement;
    expect(jumbotronTitle.innerText).toContain('Office of Public Defender');
  });
  it('should render the user selection when step is 1', () => {
    // Set the counter to 1, render user selection step
    component.stepCounter = 1;
    fixture.detectChanges();

    // Grab an element to test if it rendered
    const testText = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(testText.innerText).toContain('user selection step works!');
  });
  it('should render the form type selection, whether new or continue form, when stepCounter is 2', () => {
    // Set the stepcounter to two
    component.stepCounter = 2;
    fixture.detectChanges();

    // grab element to check that it rendered
    const testText = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(testText.innerText).toContain('form type selection works!');
  });
  it('should render the request number prompt if the stepCounter is 3', () => {
    component.stepCounter = 3;
    fixture.detectChanges();

    const testText = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(testText.innerText).toContain('request number prompt works');
  });
});
