import { Injectable } from "@angular/core";
import { Offer, Product } from "./pps-send-offers-data.service";
import { Chbs } from "./pps-send-offers-facade.service";

@Injectable()
export class PpsSendOffersSelectedItemsService {
    private _chbs: Chbs;

    get chbs(): Chbs {
        return this._chbs;
    }

    init(products: Product[], offers: Offer[]) {
        if (this._chbs) return;

        this._chbs = products.reduce((acc, p) => ({ ...acc, [p.id]: { isNewOffer: false } }), {});
        offers.forEach(o => this._chbs[o.productId][o.id] = true);
    }

    onOfferToggled(productId: number, offerId: number, isChecked: boolean) {
        if (this._chbs[productId].isNewOffer)
            this._chbs[productId].isNewOffer = false;
        this._chbs[productId][offerId] = isChecked;
    }

    onNewOfferToggled(productId: number, isChecked: boolean) {
        if (isChecked) {
            Object.keys(this._chbs[productId]).forEach(k => {
                if (k !== 'isNewOffer') {
                    this._chbs[productId][+k] = false
                }
            });
        }
    }

    getNewOfferProductIds(): number[] {
        const productIds: number[] = Object.keys(this._chbs).map(value => +value);
        return productIds.filter(p => this._chbs[p].isNewOffer);
    }
}