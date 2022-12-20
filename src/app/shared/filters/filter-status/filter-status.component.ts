import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-status',
  templateUrl: './filter-status.component.html',
  styleUrls: ['./filter-status.component.scss']
})
export class FilterStatusComponent extends AbstractFilterComponent {
  private readonly _actualItemIds: number[] = [0, 7, 1, 2];
  @Input() items: { id: number, name: string, color: string }[] = [
    { id: 0, name: 'Прием предложений', color: 'red' },
    { id: 7, name: 'Переторжка', color: 'green' },
    { id: 1, name: 'Согласование условий', color: 'blue' },
    { id: 2, name: 'Согласование договора', color: 'yellow' },
    { id: 3, name: 'Заказ завершен', color: 'red' },
    { id: 4, name: 'Заказ завершен без договора', color: 'green' },
  ];
  data: Filter = Filters.Statuses;
  value: number[];

  protected parseQueryParams(params: Params): void {
    const value: string = params[this.data.queryParamName];
    this.value = value ? value.split(',').map(i => +i) : [];
  }

  toggleItem(e: Event, itemId: number) {
    const isChecked = (e.target as HTMLInputElement).checked;
    let currentItemIds: number[] = [...this.value];

    if (isChecked) {
      if (!currentItemIds.includes(itemId))
        currentItemIds.push(itemId);
    } else {
      currentItemIds = currentItemIds.filter(i => i !== itemId);
    }

    if (currentItemIds.length) {
      this.setQueryParam(currentItemIds.join(','));
    } else {
      this.clearQueryParam();
    }
  }

  toggleOnlyActual(e: Event) {
    const checked: boolean = (e.target as HTMLInputElement).checked;
    if (checked) {
      this.setQueryParam(this.items.map(i => i.id)
        .filter(id => this._actualItemIds.includes(+id))
        .join(','));
    } else {
      this.clearQueryParam();
    }
  }

}