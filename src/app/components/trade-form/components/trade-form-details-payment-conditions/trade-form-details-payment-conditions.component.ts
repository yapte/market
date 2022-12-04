import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-details-payment-conditions',
  templateUrl: './trade-form-details-payment-conditions.component.html',
  styleUrls: ['./trade-form-details-payment-conditions.component.scss']
})
export class TradeFormDetailsPaymentConditionsComponent {
  control: FormControl = this._facade.getField('details', 'conditionsOfPayment') as FormControl;
  conditions: SelectItem[] = [
    { label: 'Предоплата', value: 'Предоплата' },
    { label: 'Постоплата', value: 'Постоплата' },
    { label: 'Рассрочка платежа', value: 'Рассрочка платежа' },
    { label: 'Оплата в кредит', value: 'Оплата в кредит' },
    { label: 'В соответствии с документацией', value: 'В соответствии с документацией' },
  ];

  constructor(private _facade: TradeFormFacadeService) { }
}
