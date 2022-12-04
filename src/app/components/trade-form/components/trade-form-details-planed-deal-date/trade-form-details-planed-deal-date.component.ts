import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-planed-deal-date',
  templateUrl: './trade-form-details-planed-deal-date.component.html',
  styleUrls: ['./trade-form-details-planed-deal-date.component.scss']
})
export class TradeFormDetailsPlanedDealDateComponent {
  control: FormControl = this._facade.getField('details', 'planedDealSignDate') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
