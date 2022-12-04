import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-eis-plan-number',
  templateUrl: './trade-form-eis-plan-number.component.html',
  styleUrls: ['./trade-form-eis-plan-number.component.scss']
})
export class TradeFormEisPlanNumberComponent {
  control: FormControl = this._facade.getField('eisInfo', 'planRegistrationNumber') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
