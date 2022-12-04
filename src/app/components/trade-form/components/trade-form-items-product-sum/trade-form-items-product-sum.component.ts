import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-product-sum',
  templateUrl: './trade-form-items-product-sum.component.html',
  styleUrls: ['./trade-form-items-product-sum.component.scss']
})
export class TradeFormItemsProductSumComponent {
  @Input() index: number;
  sum$: Observable<number>;

  constructor(private _facade: TradeFormFacadeService) { }

  ngOnInit(): void {
    if (this.index === undefined) {
      console.error('@Input() index = undefined');
      return;
    }
    this.sum$ = this._facade.productSums$.pipe(
      map(value => value[this.index]),
    );
  }
}
