import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-contract-form',
  templateUrl: './trade-form-details-contract-form.component.html',
  styleUrls: ['./trade-form-details-contract-form.component.scss']
})
export class TradeFormDetailsContractFormComponent {
  control: FormControl = this._facade.getField('details', 'isContractInElectronicForm') as FormControl;
  types = [
    { name: 'Электронный договор', code: true },
    { name: 'Бумажный договор', code: false },
  ];

  constructor(private _facade: TradeFormFacadeService) { }
}
