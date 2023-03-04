import { Component, Input } from '@angular/core';
import { Offer } from '../../services/pps-send-offers-data.service';
import { PpsSendOffersFacadeService } from '../../services/pps-send-offers.service';

@Component({
  selector: 'app-pps-send-offers-offer',
  templateUrl: './pps-send-offers-offer.component.html',
  styleUrls: ['./pps-send-offers-offer.component.scss'],
})
export class PpsSendOffersOfferComponent {
  @Input() productId: number;
  @Input() productChbs: { [offerId: number]: boolean; isNewOffer: boolean };
  @Input() offers: Offer[];

  get createdOfferIds(): number[] {
    return this._facade.createdOfferIds;
  }

  constructor(private _facade: PpsSendOffersFacadeService) { }

  onOfferToggled(isChecked: boolean, offer: Offer) {
    this._facade.onOfferToggled(offer.productId, offer.id, isChecked);
  }

  onNewOfferToggled(isChecked: boolean) {
    this._facade.onNewOfferToggled(this.productId, isChecked)
  }
}
