import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-contact-fio',
  templateUrl: './trade-form-details-contact-fio.component.html',
  styleUrls: ['./trade-form-details-contact-fio.component.scss']
})
export class TradeFormDetailsContactFioComponent {
  control: FormControl = this._facade.getContactField('fio') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
