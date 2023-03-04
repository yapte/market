import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

let __UNIQUE_ID = 10000;

@Injectable()
export class PpsSendOffersDataService {
    private OFFERS: Offer[] = [];
    private _getTrade(): Trade {
        return {
            id: 100,
            name: 'Trade #1',
            products: this._getProducts([10, 20, 30]),
        }
    };

    private _getProducts(ids: number[]): Product[] {
        return ids.map(p => ({ id: p, name: `Product ${p}`, price: p * 1000, qty: p + 2 }));
    }

    private _getOffers(ids: number[], productId?: number): Offer[] {
        return ids.map(o => ({ id: o, name: `Offer ${o}`, price: o * 1000, productId: productId ?? ((o % 3) + 1) * 10 }));
    }

    getTrade(): Observable<Trade> {
        return of(this._getTrade()).pipe(delay(500));
    }

    getOffers(): Observable<Offer[]> {
        if (!this.OFFERS.length) {
            this.OFFERS = this._getOffers([1, 2, 3, 4, 6, 7, 9]);
        }
        return of(this.OFFERS).pipe(delay(1000));
    }

    createOffer(offer: Offer): number {
        __UNIQUE_ID++;
        offer.id = __UNIQUE_ID;
        this.OFFERS.push(offer);
        return offer.id;
    }

    editOffer(formValue: Offer) {
        const offer = this.OFFERS.find(o => o.id === formValue.id);
        offer.name = formValue.name;
        offer.price = formValue.price;
    }
}

export class Trade {
    id: number;
    name: string;
    // price: number;
    products: Product[];
}

export class Product {
    id: number;
    name: string;
    price: number;
    qty: number;
}

export class Offer {
    id: number;
    name: string;
    price: number;
    productId: number;
}