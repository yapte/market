import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

const ACTUAL_ITEM_IDS: number[] = [0, 7, 1, 2];


@Component({
  selector: 'filter-status',
  templateUrl: './filter-status.component.html',
  styleUrls: ['./filter-status.component.scss']
})
export class FilterStatusComponent extends AbstractFilterComponent {
  @Input() items: { id: number, name: string, color: string }[] = [
    { id: 0, name: 'Прием предложений', color: 'red' },
    { id: 7, name: 'Переторжка', color: 'green' },
    { id: 1, name: 'Согласование условий', color: 'blue' },
    { id: 2, name: 'Согласование договора', color: 'yellow' },
    { id: 3, name: 'Заказ завершен', color: 'red' },
    { id: 4, name: 'Заказ завершен без договора', color: 'green' },
  ];
  data: Filter = Filters.Statuses;
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

  toggleOnlyActual({ checked }: { checked: boolean }) {
    this.values = checked ? [...ACTUAL_ITEM_IDS] : [];
    this.toggleItem();
  }

}