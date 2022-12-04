import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-is-import-phaseout',
  templateUrl: './trade-form-is-import-phaseout.component.html',
  styleUrls: ['./trade-form-is-import-phaseout.component.scss']
})
export class TradeFormIsImportPhaseoutComponent {
  control: FormControl = this._facade.getField('main', 'isImportPhaseout') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
