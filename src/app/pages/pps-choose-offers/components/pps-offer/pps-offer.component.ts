import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { collapseAnimation } from 'src/app/animations/collapse.animation';

@Component({
  selector: 'app-pps-offer',
  templateUrl: './pps-offer.component.html',
  styleUrls: ['./pps-offer.component.scss'],
  animations: [collapseAnimation],
})
export class PpsOfferComponent {
  @Input() parentIndex: number;
  @Input() offersGroup: any[];

  isExpanded: boolean = false;

  arr: Toggled[] = [
    { id: 1, isEnabled: false },
    { id: 2, isEnabled: true },
    { id: 3, isEnabled: false },
  ];

  map: Record<number, boolean> = {
    1: false,
    2: true,
    3: false,
  }

  // Алгоритмы и структуры данных

  qwe(e: any, id: number) {
    // ARRAY
    const el = this.arr.find(i => i.id === id);
    if (el) {
      el.isEnabled = e.checked;
    }

    // MAP
    this.map[id] = e.checked;

    // _service.onChange(value) // boolean
    // _service.onChange(value) // { isOn: boolean; comment: string }
  }
}

interface Toggled {
  id: number;
  isEnabled: boolean;
  comment?: string;
}

enum Status {

}
