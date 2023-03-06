import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable, switchMap } from "rxjs";
import { PpsSendOffersDataService } from "./pps-send-offers-data.service";
import { PpsSendOffersView, ProductView } from "./pps-send-offers-facade.service";

@Injectable()
export class PpsSendOffersStoreService {
    private _fetchOffersEmitter$ = new BehaviorSubject<boolean>(true);

    constructor(private _data: PpsSendOffersDataService) { }

    init(): Observable<PpsSendOffersView> {
        return combineLatest([
            this._data.getTrade(),
            this._fetchOffersEmitter$.pipe(switchMap(() => this._data.getOffers())),
        ]).pipe(
            map(([trade, offers]) => {
                const productsMap: Record<number, ProductView> = trade.products.reduce((acc, p) => ({ ...acc, [p.id]: { product: p, offers: [] } }), {});
                offers.forEach(o => productsMap[o.productId].offers.push(o));
                return ({ trade, productViews: Object.values(productsMap) })
            }),
        );
    }

    fetchOffers() {
        this._fetchOffersEmitter$.next(true);
    }
}