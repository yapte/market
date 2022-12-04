import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-eis-is-emergency',
  templateUrl: './trade-form-eis-is-emergency.component.html',
  styleUrls: ['./trade-form-eis-is-emergency.component.scss']
})
export class TradeFormEisIsEmergencyComponent {
  control: FormControl = this._facade.getField('eisInfo', 'isEmergency') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
