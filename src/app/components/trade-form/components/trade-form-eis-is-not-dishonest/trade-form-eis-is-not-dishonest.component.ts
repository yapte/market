import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-eis-is-not-dishonest',
  templateUrl: './trade-form-eis-is-not-dishonest.component.html',
  styleUrls: ['./trade-form-eis-is-not-dishonest.component.scss']
})
export class TradeFormEisIsNotDishonestComponent {
  control: FormControl = this._facade.getField('eisInfo', 'notDishonest') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
