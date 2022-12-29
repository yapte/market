import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-okpd2',
  templateUrl: './filter-okpd2.component.html',
  styleUrls: ['./filter-okpd2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOkpd2Component extends AbstractFilterComponent {
  data: Filter = Filters.Okpd2Codes;
  value: string[];

  protected parseQueryParams(params: Params): void {
    const value: string = params[this.data.queryParamName];
    this.value = value ? value.split(',') : [];
  }

  onChange(codes: string[]) {
    if (codes?.length) {
      this.setQueryParam(codes.join(','));
    } else {
      this.clearQueryParam();
    }
  }
}
