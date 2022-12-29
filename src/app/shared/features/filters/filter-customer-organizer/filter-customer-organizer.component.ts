import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-customer-organizer',
  templateUrl: './filter-customer-organizer.component.html',
  styleUrls: ['./filter-customer-organizer.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterCustomerOrganizerComponent extends AbstractFilterComponent {
  data: Filter = Filters.CustomerOrganizer;
  value: string;

  protected parseQueryParams(params: Params): void {
    this.value = params[this.data.queryParamName];
  }

  onOrganizationChangeSelection(e: any[]) {
    this.value = e?.[0] ?? null;
    if (this.value) {
      this.setQueryParam(this.value);
    } else {
      this.clearQueryParam();
    }
  }
}
