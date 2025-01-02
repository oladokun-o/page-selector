import { Component } from '@angular/core';
import { SelectorComponent } from './components/selector/selector.component';

@Component({
  selector: 'app-root',
  imports: [SelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
