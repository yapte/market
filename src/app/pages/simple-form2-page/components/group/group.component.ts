import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class GroupComponent {
  @Input() index: number;
  @Output() onRemoveAt = new EventEmitter<number>();

  removeAt(index: number) {
    this.onRemoveAt.emit(index);
  }
}
