import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-fill-app-end-date',
  templateUrl: './trade-form-details-fill-app-end-date.component.html',
  styleUrls: ['./trade-form-details-fill-app-end-date.component.scss']
})
export class TradeFormDetailsFillAppEndDateComponent {
  control: FormControl = this._facade.getField('details', 'fillingApplicationEndDate') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
