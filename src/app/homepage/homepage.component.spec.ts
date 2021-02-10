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
  it('should render the homepage as default', () => {
    const jumbotronTitle = fixture.debugElement.query(By.css('h1.display-4'))
      .nativeElement;
    expect(jumbotronTitle.innerText).toContain('Office of Public Defender');
  });
});
