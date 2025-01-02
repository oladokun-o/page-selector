import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input() checked?: boolean = false;
  @Input() label = '';
  @Output() checkedChange: EventEmitter<void> = new EventEmitter<void>();

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      // Toggle checkbox state
      this.checked = !this.checked;
      this.checkedChange.emit();
      event.preventDefault();
    }
  }
}
