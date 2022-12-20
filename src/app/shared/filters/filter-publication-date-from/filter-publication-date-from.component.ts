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
  value: string;

  protected parseQueryParams(params: Params): void {
    this.value = params[this.data.queryParamName];
  }

  // TODO: +03:00 
  setDate(date: string) {
    if (this.value != date) {
      this.value = date;
      if (this.value) {
        this.setQueryParam(this.value);
      }
      else {
        this.clearQueryParam();
      }
    }
  }
}
