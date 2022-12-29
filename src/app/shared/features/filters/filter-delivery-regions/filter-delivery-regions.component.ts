import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-delivery-regions',
  templateUrl: './filter-delivery-regions.component.html',
  styleUrls: ['./filter-delivery-regions.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDeliveryRegionsComponent extends AbstractFilterComponent {
  data: Filter = Filters.DeliveryRegions;
  value: string[];

  protected parseQueryParams(params: Params): void {
    const value: string = params[this.data.queryParamName];
    this.value = value ? value.split(',') : [];
  }

  onChange(regionIds: string[]) {
    if (regionIds?.length) {
      this.setQueryParam(regionIds.join(','));
    } else {
      this.clearQueryParam();
    }
  }
}
