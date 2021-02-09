import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { FormActionSelectionComponent } from './form-action-selection.component';

describe('FormActionSelectionComponent', () => {
  let component: FormActionSelectionComponent;
  let fixture: ComponentFixture<FormActionSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormActionSelectionComponent],
      imports: [BrowserAnimationsModule, HttpClientModule],
      providers: [ApiHttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have showChoices variable set to true as default', () => {
    expect(component.showChoices).toBeTrue();
  });
  it('should show the choices view by default', () => {
    const titleElement = fixture.debugElement.query(By.css('h1.page-title'))
      .nativeElement;

    expect(titleElement.innerText).toContain('What would you like to do?');
  });
  it('should show three buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(3);
  });
  it('should show the reference number prompt if showChoices is false', () => {
    // change showChoices to false
    component.showChoices = false;
    fixture.detectChanges();

    // check that the reference number prompt is showing
    const referenceNumberInput = fixture.debugElement.query(
      By.css('input.referenceNumberPrompt')
    ).nativeElement;
    expect(referenceNumberInput).toBeDefined();
  });
  // TODO: Move this test to homepage component
  it('should change showChoices to false when clicked', () => {
    // showing choices
    component.showChoices = true;
    fixture.detectChanges();

    // toggle
    component.toggleShowChoices();
    fixture.detectChanges();

    // check that showChoices is false
    expect(component.showChoices).toBeFalse();
  });
  // This is for the requet number prompt
  it('should not show request number prompt when cancel button is pressed(request number prompt)', () => {
    // set show choices to false
    component.showChoices = false;
    fixture.detectChanges();

    // grab the button and simultate a click
    const cancelButton = fixture.debugElement.query(
      By.css('button#requestNumberPromptCancelBtn')
    ).nativeElement;
    cancelButton.click();
    fixture.detectChanges();

    // Check that the request number prompt is not showing
    const headerPrompt = fixture.debugElement.query(By.css('h1.page-title'))
      .nativeElement;
    //Should not show the old header
    expect(headerPrompt.innerText).not.toContain('Enter request number');
  });
  it('should have the retrieve form button', () => {
    // Show the request number prompt
    component.showChoices = false;
    fixture.detectChanges();

    // grab retrieve form button
    const retrieveFormButton = fixture.debugElement.query(
      By.css('button#retrieveBtn')
    ).nativeElement;
    expect(retrieveFormButton).toBeDefined();
  });
});
