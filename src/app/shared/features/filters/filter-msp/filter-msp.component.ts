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

  // @Input() items: { id: number, name: string }[] = [
  //   { id: 0, name: 'Все' },
  //   { id: 1, name: 'Только для МСП' },
  //   { id: 2, name: 'Только не МСП' },
  // ];
  data: Filter = Filters.SmpFilterState;
  value: boolean = null;
  get label(): string {
    if (this.value)
      return 'Только для МСП';
    if (this.value === false)
      return 'Только не МСП';
    return 'Без разницы';
  }
  inputName: string = `r${FilterMspComponent.inputNameIndex++}`;

  protected parseQueryParams(params: Params): void {
    const value: number = +params[this.data.queryParamName];
    if (!value) {
      this.value = null;
    } else {
      this.value = value === 1 ? true : false;
    }
  }

  change() {
    if (this.value === null) {
      this.clearQueryParam();
    } else {
      this.setQueryParam(`${this.value ? 1 : 2}`);
    }
  }
}
