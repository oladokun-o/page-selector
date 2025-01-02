import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonText = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
}
