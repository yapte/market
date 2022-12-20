import { Component } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-import-phaseout',
  templateUrl: './filter-import-phaseout.component.html',
  styleUrls: ['./filter-import-phaseout.component.scss']
})
export class FilterImportPhaseoutComponent extends AbstractFilterComponent {
  data: Filter = Filters['IsImportPhaseout'];
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
