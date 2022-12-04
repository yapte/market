import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-eis-application-request-order',
  templateUrl: './trade-form-eis-application-request-order.component.html',
  styleUrls: ['./trade-form-eis-application-request-order.component.scss']
})
export class TradeFormEisApplicationRequestOrderComponent {
  control: FormControl = this._facade.getField('eisInfo', 'applicationRequestOrder') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
