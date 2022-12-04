import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VAT_CONDITIONS } from '../../constants/vat-conditions.const';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-is-with-vat',
  templateUrl: './trade-form-items-is-with-vat.component.html',
  styleUrls: ['./trade-form-items-is-with-vat.component.scss']
})
export class TradeFormItemsIsWithVatComponent {
  conditions = VAT_CONDITIONS;
  control: FormControl = this._facade.getField('items', 'isLotPriceWithVat') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
