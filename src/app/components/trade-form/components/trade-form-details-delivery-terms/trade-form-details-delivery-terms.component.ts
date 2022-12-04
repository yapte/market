import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-delivery-terms',
  templateUrl: './trade-form-details-delivery-terms.component.html',
  styleUrls: ['./trade-form-details-delivery-terms.component.scss']
})
export class TradeFormDetailsDeliveryTermsComponent {
  control: FormControl = this._facade.getField('details', 'deliveryTerms') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
