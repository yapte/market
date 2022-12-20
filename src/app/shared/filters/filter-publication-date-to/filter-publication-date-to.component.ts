import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'filter-publication-date-to',
  templateUrl: './filter-publication-date-to.component.html',
  styleUrls: ['./filter-publication-date-to.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPublicationDateToComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
