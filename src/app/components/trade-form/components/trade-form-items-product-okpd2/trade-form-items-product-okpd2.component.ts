import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Okpd2 } from 'src/app/helpers/okpd2.interface';
import { TenantCode } from 'src/app/helpers/tenant-code.enum';
import { OKPD2_CODES } from '../../constants/okpd2-codes.const';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-product-okpd2',
  templateUrl: './trade-form-items-product-okpd2.component.html',
  styleUrls: ['./trade-form-items-product-okpd2.component.scss']
})
export class TradeFormItemsProductOkpd2Component {
  TenantCode = TenantCode;
  codes: Okpd2[] = OKPD2_CODES;
  @Input() index: number;
  control: FormControl;

  constructor(
    private _facade: TradeFormFacadeService) { }

  ngOnInit(): void {
    if (this.index === undefined) {
      console.error('@Input() index = undefined');
      return;
    }
    this.control = this._facade.getProductField(this.index, 'okpd2Codes') as FormControl;
  }
}
