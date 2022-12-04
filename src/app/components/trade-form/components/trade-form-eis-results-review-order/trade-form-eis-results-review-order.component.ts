import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-eis-results-review-order',
  templateUrl: './trade-form-eis-results-review-order.component.html',
  styleUrls: ['./trade-form-eis-results-review-order.component.scss']
})
export class TradeFormEisResultsReviewOrderComponent {
  control: FormControl = this._facade.getField('eisInfo', 'resultsReviewOrder') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
