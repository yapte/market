import { Component, Input } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-in-stock',
  templateUrl: './filter-in-stock.component.html',
  styleUrls: ['./filter-in-stock.component.scss']
})
export class FilterInStockComponent extends AbstractFilterComponent {
  @Input() items: { id: number, name: string }[] = [
    { id: 1, name: 'В наличии' },
    { id: 235, name: 'Под заказ' },
  ];
  data: Filter = Filters['InStock'];
  values: number[];

  protected parseQueryParams(params: Params): void {
    const value: string = params[this.data.queryParamName];
    this.values = value ? value.split(',').map(i => +i) : [];
  }

  toggleItem() {
    if (this.values.length) {
      this.setQueryParam(this.values.join(','));
      return;
    }
    this.clearQueryParam();
  }

}
