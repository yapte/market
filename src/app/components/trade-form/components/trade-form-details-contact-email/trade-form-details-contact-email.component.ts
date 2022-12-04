import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-contact-email',
  templateUrl: './trade-form-details-contact-email.component.html',
  styleUrls: ['./trade-form-details-contact-email.component.scss']
})
export class TradeFormDetailsContactEmailComponent {
  control: FormControl = this._facade.getContactField('contactEmail') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
