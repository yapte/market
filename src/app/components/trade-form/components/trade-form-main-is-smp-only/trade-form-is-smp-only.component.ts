import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-is-smp-only',
  templateUrl: './trade-form-is-smp-only.component.html',
  styleUrls: ['./trade-form-is-smp-only.component.scss']
})
export class TradeFormIsSmpOnlyComponent {
  control: FormControl = this._facade.getField('main', 'isOnlySmp') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
