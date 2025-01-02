import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface SelectorItem {
  title: string;
  selected?: boolean;
}

@Component({
  selector: 'app-selector',
  imports: [
    ButtonComponent,
    CheckboxComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent implements OnInit {
  selectorForm!: FormGroup;
  selectorItems: SelectorItem[] = [
    { title: 'Page 1' },
    { title: 'Page 2' },
    { title: 'Page 3' },
    { title: 'Page 4' },
    { title: 'Page 5' },
    { title: 'Page 6' },
  ];

  isAllSelected = false;

  get selectedPages(): SelectorItem[] {
    return this.selectorItems.filter((item) => item.selected);
  }

  get selectAllControl(): FormControl {
    return this.selectorForm.get('selectAll') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectorForm = this.fb.group({
      selectAll: [false],
      items: this.fb.array(
        this.selectorItems.map(() => this.fb.control(false))
      ),
    });

    const itemsArray = this.selectorForm.get('items') as FormArray;

    // Synchronize selectorItems with form values
    itemsArray.valueChanges.subscribe((values: boolean[]) => {
      this.selectorItems.forEach((item, index) => {
        item.selected = values[index];
      });

      const allSelected = values.every((value) => value);
      this.selectorForm.get('selectAll')?.setValue(allSelected, {
        emitEvent: false,
      });
    });
  }

  toggleSelectAll(): void {
    const selectAllState = this.selectorForm.get('selectAll')?.value;
    const itemsArray = this.selectorForm.get('items') as FormArray;

    itemsArray.controls.forEach((control) => control.setValue(selectAllState));

    // Update selectorItems as well
    this.selectorItems.forEach((item) => {
      item.selected = selectAllState;
    });
  }

  toggleItemSelection(): void {
    const itemsArray = this.selectorForm.get('items') as FormArray;
    const allSelected = itemsArray.controls.every((control) => control.value);

    this.selectorForm
      .get('selectAll')
      ?.setValue(allSelected, { emitEvent: false });
  }

  onSubmit(): void {
    if (this.selectorForm.valid) {
      const selectedItems = this.selectorItems.filter((item) => item.selected);
      console.log('Selected Items:', selectedItems);
    }
  }

  getFormControl(index: number): FormControl {
    return (this.selectorForm.get('items') as FormArray).at(
      index
    ) as FormControl;
  }
}
