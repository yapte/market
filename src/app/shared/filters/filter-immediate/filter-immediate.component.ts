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
    const value: string = params[this.data.queryParamName];
    this.value = !!value;
  }

  toggle(e: Event) {
    const isChecked = (e.target as HTMLInputElement).checked;
    if (isChecked) {
      this.setQueryParam(`${isChecked}`);
    }
    else {
      this.clearQueryParam();
    }
  }
}
