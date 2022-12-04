import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-description',
  templateUrl: './trade-form-description.component.html',
  styleUrls: ['./trade-form-description.component.scss']
})
export class TradeFormDescriptionComponent {
  control: FormControl = this._facade.getField('main', 'description') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
