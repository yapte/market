import { Component, Input } from '@angular/core';
import { Product } from '../../services/pps-send-offers-data.service';
import { Chbs, PpsSendOffersFacadeService } from '../../services/pps-send-offers.service';

@Component({
  selector: 'app-pps-send-offers-product',
  templateUrl: './pps-send-offers-product.component.html',
  styleUrls: ['./pps-send-offers-product.component.scss']
})
export class PpsSendOffersProductComponent {
  @Input() index: number;
  @Input() product: Product;

  get selectedQty(): number {
    const productObject: { [offerId: number]: boolean; isNewOffer: boolean } = { ...this._facade.chbs[this.product.id] };
    delete productObject.isNewOffer;
    const productValues: boolean[] = Object.values(productObject);
    return productValues.filter((value, index) => value).length;
  }

  constructor(private _facade: PpsSendOffersFacadeService) { }
}
