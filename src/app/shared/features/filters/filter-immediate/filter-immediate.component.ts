import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-immediate',
  templateUrl: './filter-immediate.component.html',
  styleUrls: ['./filter-immediate.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterImmediateComponent extends AbstractFilterComponent {
  data: Filter = Filters.IsImmediate;
  value: boolean;

  protected parseQueryParams(params: Params): void {
    this.value = !!params[this.data.queryParamName];
  }

  toggle() {
    if (this.value) {
      this.setQueryParam(`${this.value}`);
    } else {
      this.clearQueryParam();
    }
  }
}
