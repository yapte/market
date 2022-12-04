import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-contact-phone',
  templateUrl: './trade-form-details-contact-phone.component.html',
  styleUrls: ['./trade-form-details-contact-phone.component.scss']
})
export class TradeFormDetailsContactPhoneComponent {
  control: FormControl = this._facade.getContactField('contactPhone') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
