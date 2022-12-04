import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-total',
  templateUrl: './trade-form-items-total.component.html',
  styleUrls: ['./trade-form-items-total.component.scss']
})
export class TradeFormItemsTotalComponent implements OnInit {
  control: FormControl = this._facade.getField('items', 'initialPriceWithVat') as FormControl;

  totalSumWithoutVat$: Observable<number> = this._facade.totalSumWithoutVat$;

  rateVatDescription$: Observable<string> = this._facade.rateVat$.pipe(
    map(value => {
      if (value === 1) return '10%';
      if (value === 10) return '20%';
      if (value === 100) return 'Смешанный';
      return '0%';
    })
  );

  rateVatValue$: Observable<number> = combineLatest([
    this._facade.rateVat$,
    this._facade.totalSumWithoutVat$,
  ]).pipe(
    map(([v, s]) => {
      if (v === 100) {
        return this.control.value - s;
      }
      let vatRate: number = 0;
      if (v === 1) vatRate = 10;
      if (v === 5) vatRate = 20;
      return s * vatRate / 100;
    }),
  );

  sumWithVat$: Observable<number> = combineLatest([
    this._facade.rateVat$,
    this._facade.totalSumWithoutVat$,
  ]).pipe(
    map(([v, s]) => {
      if (v === 100) {
        return this.control.value;
      }
      let vatRate: number = 0;
      if (v === 1) vatRate = 10;
      if (v === 5) vatRate = 20;
      return s * (100 + vatRate) / 100;
    }),
  );


  isControlVisible$: Observable<boolean> = this._facade.rateVat$
    .pipe(map(value => value === 100));

  constructor(private _facade: TradeFormFacadeService) { }

  ngOnInit(): void {

  }
}
