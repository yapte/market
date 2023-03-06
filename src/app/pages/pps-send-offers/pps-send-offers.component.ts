import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { titleAnimation } from 'src/app/animations/title.animation';
import { PpsSendOffersDataService } from './services/pps-send-offers-data.service';
import { SelectedItemsMap, PpsSendOffersFacadeService, PpsSendOffersView } from './services/pps-send-offers-facade.service';
import { PpsSendOffersFormService } from './services/pps-send-offers-form-service';
import { PpsSendOffersSelectedItemsService } from './services/pps-send-offers-selected-items.service';
import { PpsSendOffersStoreService } from './services/pps-send-offers-store.service';

@Component({
  selector: 'app-pps-send-offers',
  templateUrl: './pps-send-offers.component.html',
  styleUrls: ['./pps-send-offers.component.scss'],
  providers: [
    PpsSendOffersDataService,
    PpsSendOffersFacadeService,
    PpsSendOffersFormService,
    PpsSendOffersSelectedItemsService,
    PpsSendOffersStoreService,
    DialogService,
  ],
  animations: [titleAnimation],
})
export class PpsSendOffersComponent implements OnInit {
  view$: Observable<PpsSendOffersView>;

  get chbs(): SelectedItemsMap {
    return this._facade.chbs;
  };

  get checkedQty(): number {
    if (!this.chbs) return 0;
    return Object.values(this.chbs)
      .filter(p => Object.values(p).some(value => value))
      .length;
  }

  get checkedNewQty(): number {
    if (!this.chbs) return 0;
    return Object.values(this.chbs)
      .filter(p => p.isNewOffer)
      .length;
  }

  constructor(private _facade: PpsSendOffersFacadeService) { }

  ngOnInit(): void {
    this._facade.init();
    this.view$ = this._facade.view$;
  }

  showCreateModal() {
    this._facade.showModal();
  }

  submit() {
    this._facade.submit();
  }
}
