import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DialogService } from "primeng/dynamicdialog";
import { Observable, tap } from "rxjs";
import { Destroy$ } from "src/app/helpers/destroy";
import { PpsSendOffersCreateModalComponent } from "../components/pps-send-offers-create-modal/pps-send-offers-create-modal.component";
import { Offer, PpsSendOffersDataService, Product, Trade } from "./pps-send-offers-data.service";
import { PpsSendOffersFormService } from "./pps-send-offers-form-service";
import { PpsSendOffersSelectedItemsService } from "./pps-send-offers-selected-items.service";
import { PpsSendOffersStoreService } from "./pps-send-offers-store.service";

@Injectable()
export class PpsSendOffersFacadeService extends Destroy$ {
    private _createdOfferIds: number[] = [];

    view$: Observable<PpsSendOffersView>;

    get chbs(): SelectedItemsMap {
        return this._selectedItemsService.chbs;
    }
    get createdOfferIds(): number[] {
        return this._createdOfferIds;
    }
    get forms(): FormGroup[] {
        return this._formService.forms;
    }

    constructor(
        private _data: PpsSendOffersDataService,
        private _formService: PpsSendOffersFormService,
        private _selectedItemsService: PpsSendOffersSelectedItemsService,
        private _store: PpsSendOffersStoreService,
        private _dialogService: DialogService,
    ) { super() }

    init() {
        this.view$ = this._store.init()
            .pipe(
                tap(view => {
                    const products: Product[] = view.trade.products;
                    const offers: Offer[] = view.productViews.reduce((acc, pv) => [...acc, ...pv.offers], []);
                    this._selectedItemsService.init(products, offers);
                }),
            );
    }

    publishOffer(formIndex: number): Observable<number> {
        const formData: Offer = this._formService.getFormDataByIndex(formIndex);
        const isCreateFlow: boolean = !formData.id;
        return (isCreateFlow ? this._data.createOffer(formData) : this._data.editOffer(formData))
            .pipe(
                tap(offerId => {
                    if (isCreateFlow) {
                        this._formService.setOfferIdForForm(formIndex, offerId);
                        this.onOfferToggled(formData.productId, offerId, true);
                        this.createdOfferIds.push(offerId);
                    }
                }),
            );
    }

    onOfferToggled(productId: number, offerId: number, isChecked: boolean) {
        this._selectedItemsService.onOfferToggled(productId, offerId, isChecked);
    }

    onNewOfferToggled(productId: number, isChecked: boolean) {
        this._selectedItemsService.onNewOfferToggled(productId, isChecked);
    }

    showModal() {
        let productIds: number[] = this._selectedItemsService.getNewOfferProductIds();
        this._formService.generateForms(productIds);
        this._dialogService.open(PpsSendOffersCreateModalComponent, {});
    }

    fetchOffers() {
        this._store.fetchOffers();
    }

    submit() {
        console.log(this._selectedItemsService.chbs);
    }
}

export interface PpsSendOffersView {
    trade: Trade;
    productViews: ProductView[];
}

export interface ProductView {
    product: Product;
    offers: Offer[];
}

export interface SelectedItemsMap {
    [productId: number]: {
        [offerId: number]: boolean;
        isNewOffer: boolean;
    };
}