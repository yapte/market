import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.scss']
})
export class FilterPriceComponent extends AbstractFilterComponent {
  data: Filter = Filters['Price'];
  value: number[] = [null, null];

  setParams() {
    if (this.value[0] === null && this.value[1] === null) {
      this.clearQueryParam();
    } else {
      this.setQueryParam(this.value.join(','));
    }
  }

  protected parseQueryParams(params: Params): void {
    const value: string = params[this.data.queryParamName];
    this.value = value ? value.split(',').map(i => i === 'null' ? null : +i) : [null, null];
  }

  // onInputBefore(e: Event) {
  //   const value: string = (e.target as HTMLInputElement).value;
  //   this.value[0] = value === '' ? null : +value;
  //   this._setParams();
  // }

  // onInputAfter(e: Event) {
  //   const value: string = (e.target as HTMLInputElement).value;
  //   this.value[1] = value === '' ? null : +value;
  //   this._setParams();
  // }



}
