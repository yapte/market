import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { CITIES } from '../../constants/cities.const';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-delivery-address',
  templateUrl: './trade-form-details-delivery-address.component.html',
  styleUrls: ['./trade-form-details-delivery-address.component.scss']
})
export class TradeFormDetailsDeliveryAddressComponent {
  @Input() index: number;
  control: FormControl = this._facade.getField('details', 'kladrRegionCode') as FormControl;
  suggestions: SelectItem[];

  constructor(private _facade: TradeFormFacadeService) { }

  filterAddress(e: { originalEvent: InputEvent, query: string }) {
    this.suggestions = CITIES.filter(s => s.value.toLowerCase().includes(e.query.toLowerCase().trim()))
  }
}
