import { formatDate } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-publication-date-from',
  templateUrl: './filter-publication-date-from.component.html',
  styleUrls: ['./filter-publication-date-from.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPublicationDateFromComponent extends AbstractFilterComponent {
  data: Filter = Filters.PublicationDateFrom;
  value: Date;

  protected parseQueryParams(params: Params): void {
    const queryParamValue = params[this.data.queryParamName]
    this.value = queryParamValue
      ? new Date(queryParamValue)
      : null;
  }

  // TODO: +03:00 
  setDate() {
    console.log(this.value);

    if (this.value) {
      this.setQueryParam(formatDate(this.value, 'yyyy-MM-dd', 'ru-RU'));
    }
    else {
      this.clearQueryParam();
    }
  }
}
