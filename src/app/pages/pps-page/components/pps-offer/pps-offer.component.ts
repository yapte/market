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
}
