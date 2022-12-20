import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TenantDependentText } from 'src/app/tenants/tenant-dependent-text.service';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-main-name',
  templateUrl: './trade-form-main-name.component.html',
  styleUrls: ['./trade-form-main-name.component.scss']
})
export class TradeFormMainNameComponent {
  control: FormControl = this._facade.getField('main', 'tradeName') as FormControl;
  title: string = this._tenantDependentText.TRADE_NAME_TITLE;
  placeholder$: Observable<string> = this._facade.namePlaceholder$;
  validationMessage: string = this._tenantDependentText.TRADE_NAME_VALIDATION;

  constructor(
    private _facade: TradeFormFacadeService,
    private _tenantDependentText: TenantDependentText,
  ) { }
}
