import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VAT_RATES } from '../../constants/vat-rates.const';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-vat',
  templateUrl: './trade-form-items-vat.component.html',
  styleUrls: ['./trade-form-items-vat.component.scss']
})
export class TradeFormItemsVatComponent {
  rates = VAT_RATES;
  control: FormControl = this._facade.getField('items', 'rateVat') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
