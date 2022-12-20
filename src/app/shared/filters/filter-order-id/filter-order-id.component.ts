import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-order-id',
  templateUrl: './filter-order-id.component.html',
  styleUrls: ['./filter-order-id.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOrderIdComponent extends AbstractFilterComponent {
  data: Filter = Filters.OrderId;
  value: string;

  protected parseQueryParams(params: Params): void {
    this.value = params[this.data.queryParamName];
  }

  onBlur(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    if (this.value != value) {
      this.value = value;
      if (this.value) {
        this.setQueryParam(this.value);
      } else {
        this.clearQueryParam();
      }
    }
  }
}
