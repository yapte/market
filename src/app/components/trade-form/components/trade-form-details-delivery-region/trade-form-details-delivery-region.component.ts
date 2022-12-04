import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-delivery-region',
  templateUrl: './trade-form-details-delivery-region.component.html',
  styleUrls: ['./trade-form-details-delivery-region.component.scss']
})
export class TradeFormDetailsDeliveryRegionComponent {
  @Input() index: number;
  control: FormControl = this._facade.getField('details', 'deliveryRegion') as FormControl;
  suggestions: SelectItem[];

  constructor(private _facade: TradeFormFacadeService) { }
}
