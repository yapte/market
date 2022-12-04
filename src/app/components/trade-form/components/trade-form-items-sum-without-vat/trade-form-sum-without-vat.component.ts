import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, takeUntil, tap } from 'rxjs';
import { Destroy$ } from '../../../../helpers/destroy';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-sum-without-vat',
  templateUrl: './trade-form-sum-without-vat.component.html',
  styleUrls: ['./trade-form-sum-without-vat.component.scss']
})
export class TradeFormSumWithoutVatComponent extends Destroy$ implements OnInit {
  control: FormControl = this._facade.getField('items', 'initialPriceWithoutVat') as FormControl;
  isManualEnterPriceForEachProduct$: Observable<boolean>;
  sum$: Observable<number>;

  constructor(private _facade: TradeFormFacadeService) {
    super();
  }

  ngOnInit(): void {
    this.isManualEnterPriceForEachProduct$ = this._facade.isManualEnterPriceForEachProduct$
      .pipe(
        tap(value => {
          if (value) {
            this.control.disable();
            this.control.setValue(null);
          } else {
            this.control.enable();
          }
        }),
      );

    this.sum$ = this._facade.productSums$.pipe(
      map(value => value.reduce((acc, i) => acc + i, 0))
    );
  }
}
