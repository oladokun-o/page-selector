import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() checked?: boolean = false;
  @Input() label: string = '';
  @Output() checkedChange: EventEmitter<void> = new EventEmitter<void>();
}
