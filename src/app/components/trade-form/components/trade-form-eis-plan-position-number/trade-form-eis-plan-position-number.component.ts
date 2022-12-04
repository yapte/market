import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-eis-plan-position-number',
  templateUrl: './trade-form-eis-plan-position-number.component.html',
  styleUrls: ['./trade-form-eis-plan-position-number.component.scss']
})
export class TradeFormEisPlanPositionNumberComponent {
  control: FormControl = this._facade.getField('eisInfo', 'planPositionNumber') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
