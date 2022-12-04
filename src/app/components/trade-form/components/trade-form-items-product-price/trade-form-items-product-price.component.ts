import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, takeUntil, tap } from 'rxjs';
import { Destroy$ } from '../../../../helpers/destroy';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-product-price',
  templateUrl: './trade-form-items-product-price.component.html',
  styleUrls: ['./trade-form-items-product-price.component.scss']
})
export class TradeFormItemsProductPriceComponent extends Destroy$ implements OnInit {
  @Input() index: number;
  control: FormControl;
  isManualEnterPriceForEachProduct$: Observable<boolean>;

  constructor(private _facade: TradeFormFacadeService) {
    super();
  }

  ngOnInit(): void {
    if (this.index === undefined) {
      console.error('@Input() index = undefined');
      return;
    }
    this.control = this._facade.getProductField(this.index, 'price') as FormControl;
    this._facade.isManualEnterPriceForEachProduct$
      .pipe(
        takeUntil(this._destroy$),
        tap(value => {
          if (value) {
            this.control.enable();
            this.control.setValue(0);
          } else {
            this.control.disable();
            this.control.setValue(null);
          }
        }),
      )
      .subscribe();
  }
}
