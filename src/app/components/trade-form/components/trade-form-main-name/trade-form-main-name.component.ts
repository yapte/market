import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-main-name',
  templateUrl: './trade-form-main-name.component.html',
  styleUrls: ['./trade-form-main-name.component.scss']
})
export class TradeFormMainNameComponent {
  placeholder$: Observable<string> = this._facade.namePlaceholder$;
  control: FormControl = this._facade.getField('main', 'tradeName') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
