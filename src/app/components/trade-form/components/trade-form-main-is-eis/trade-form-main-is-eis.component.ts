import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-main-is-eis',
  templateUrl: './trade-form-main-is-eis.component.html',
  styleUrls: ['./trade-form-main-is-eis.component.scss']
})
export class TradeFormMainIsEisComponent {
  control: FormControl = this._facade.getField('main', 'isSendToEis') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
