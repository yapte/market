import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-contact-phonetail',
  templateUrl: './trade-form-details-contact-phonetail.component.html',
  styleUrls: ['./trade-form-details-contact-phonetail.component.scss']
})
export class TradeFormDetailsContactPhonetailComponent {
  control: FormControl = this._facade.getContactField('contactPhoneTail') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
