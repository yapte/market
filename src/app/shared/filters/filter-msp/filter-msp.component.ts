import { Component, Input } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-msp',
  templateUrl: './filter-msp.component.html',
  styleUrls: ['./filter-msp.component.scss']
})
export class FilterMspComponent extends AbstractFilterComponent {
  static inputNameIndex = 0;
  @Input() items: { id: number, name: string }[] = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Только для МСП' },
    { id: 2, name: 'Только не МСП' },
  ];
  data: Filter = Filters.SmpFilterState;
  value: number = null;
  inputName: string = `r${FilterMspComponent.inputNameIndex++}`;

  protected parseQueryParams(params: Params): void {
    const value: number = +params[this.data.queryParamName];
    this.value = value ? value : null;
  }

  selectItem(itemId: string | number) {
    if (itemId) {
      this.setQueryParam(`${itemId}`);
    } else {
      this.clearQueryParam();
    }
  }
}
