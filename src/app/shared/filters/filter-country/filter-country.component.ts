import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { AbstractFilterComponent } from '../abstract-filter';
import { Filter } from '../filter.interface';
import { Filters } from '../filters';

@Component({
  selector: 'filter-country',
  templateUrl: './filter-country.component.html',
  styleUrls: ['./filter-country.component.scss']
})
export class FilterCountryComponent extends AbstractFilterComponent {
  data: Filter = Filters['Country'];
  protected parseQueryParams(params: Params): void {
    console.log(params);
  }

}
