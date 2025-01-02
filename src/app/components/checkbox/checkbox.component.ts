import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() control!: FormControl;

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      const newValue = !this.control.value;
      this.control.setValue(newValue);
      this.checkedChange.emit(newValue);
      event.preventDefault();
    }
  }

  onCheckedChange(): void {
    this.checkedChange.emit(this.control.value);
  }
}
