import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, ControlContainer, FormArray, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ArrayComponent {
  @Output() onAdd = new EventEmitter<void>();
  @Output() onRemoveAt = new EventEmitter<number>();

  get productArrayItems(): AbstractControl[] {
    return (this._formDirective.form.get('products') as FormArray).controls;
  }

  constructor(private _formDirective: FormGroupDirective) { }

  add() {
    this.onAdd.emit();
  }

  removeAt(index: number) {
    this.onRemoveAt.emit(index);
  }
}
