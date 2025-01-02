import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CheckboxComponent], // Add CheckboxComponent to imports
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;

    // Set a mock FormControl for testing
    component.control = new FormControl(false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle control value on change', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(
      'input[type="checkbox"]'
    );

    // Simulate user interaction
    inputElement.click();
    fixture.detectChanges();

    // Assert the control value changes
    expect(component.control.value).toBe(true);
  });
});
