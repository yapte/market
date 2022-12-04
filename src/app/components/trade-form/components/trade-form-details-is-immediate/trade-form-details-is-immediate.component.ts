import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-is-immediate',
  templateUrl: './trade-form-details-is-immediate.component.html',
  styleUrls: ['./trade-form-details-is-immediate.component.scss']
})
export class TradeFormDetailsIsImmediateComponent {
  control: FormControl = this._facade.getField('details', 'isImmediate') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
