import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-is-manual-price',
  templateUrl: './trade-form-is-manual-price.component.html',
  styleUrls: ['./trade-form-is-manual-price.component.scss']
})
export class TradeFormIsManualPriceComponent {
  control: FormControl = this._facade.getField('items', 'isManualEnterPriceForEachProduct') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
