import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule } from '@angular/common';

interface SelectorItem {
  title: string;
  selected?: boolean;
}

@Component({
  selector: 'app-selector',
  imports: [ButtonComponent, CheckboxComponent, CommonModule],
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent {
  selectorItems: SelectorItem[] = [
    { title: 'Page 1', selected: false },
    { title: 'Page 2', selected: false },
    { title: 'Page 3', selected: false },
    { title: 'Page 4', selected: false },
    { title: 'Page 5', selected: false },
    { title: 'Page 6', selected: false },
  ];

  isAllSelected: boolean = false;

  toggleSelectAll() {
    this.isAllSelected = !this.isAllSelected;
    this.isAllSelected ? this.selectAll() : this.deselectAll();
  }

  selectAll() {
    this.selectorItems.forEach((item) => (item.selected = true));
  }

  deselectAll() {
    this.selectorItems.forEach((item) => (item.selected = false));
  }

  toggleItemSelection(item: SelectorItem) {
    item.selected = !item.selected;
    this.isAllSelected = this.selectorItems.every((item) => item.selected);
  }
}
