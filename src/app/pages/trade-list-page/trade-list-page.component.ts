import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { titleAnimation } from 'src/app/animations/title.animation';
import { Sorts } from 'src/app/shared/features/sort/sorts';

@Component({
  selector: 'app-trade-list-page',
  templateUrl: './trade-list-page.component.html',
  styleUrls: ['./trade-list-page.component.scss'],
  animations: [titleAnimation],
})
export class TradeListPageComponent {
  views: SelectItem[] = [
    { icon: 'pi pi-list', value: 'list' },
    { icon: 'pi pi-th-large', value: 'grid' },
  ];

  Sorts = Sorts;

  relevanceSort: boolean = null;
  priceSort: boolean = null;
  newnessSort: boolean = null;

  currentView: string = this.views[0].value;
}
