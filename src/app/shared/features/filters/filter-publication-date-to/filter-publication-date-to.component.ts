import { formatDate } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-publication-date-to',
  templateUrl: './filter-publication-date-to.component.html',
  styleUrls: ['./filter-publication-date-to.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPublicationDateToComponent extends AbstractFilterComponent {
  data: Filter = Filters.PublicationDateTo;
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
