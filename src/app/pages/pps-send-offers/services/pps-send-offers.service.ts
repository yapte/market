import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { BehaviorSubject, combineLatest, delay, filter, Observable, of, switchMap, takeUntil, tap } from "rxjs";
import { Destroy$ } from "src/app/helpers/destroy";
import { PpsSendOffersCreateModalComponent } from "../components/pps-send-offers-create-modal/pps-send-offers-create-modal.component";
import { Offer, PpsSendOffersDataService, Product, Trade } from "./pps-send-offers-data.service";

@Injectable()
export class PpsSendOffersFacadeService extends Destroy$ {
    private _fetchOffersEmitter$ = new BehaviorSubject<boolean>(true);
    private _view$ = new BehaviorSubject<PpsSendOffersView>(null);
    private _chbs: Chbs;
    private _createOffersModalRef: DynamicDialogRef;
    private _forms: FormGroup[] = [];
    private _activeFormIndex$ = new BehaviorSubject<number>(0);
    private _createdOfferIds: number[] = [];

    view$: Observable<PpsSendOffersView> = this._view$.pipe(filter(value => !!value));
    activeFormIndex$: Observable<number> = this._activeFormIndex$.asObservable();

    get chbs(): Chbs {
        return this._chbs;
    }
    get createdOfferIds(): number[] {
        return this._createdOfferIds;
    }
    get forms(): FormGroup[] {
        return this._forms;
    }

    constructor(
        private _data: PpsSendOffersDataService,
        private _dialogService: DialogService,
    ) { super() }

    private _initChbsModel(products: Product[], offers: Offer[]) {
        if (this._chbs) return;

        this._chbs = products.reduce((acc, p) => ({ ...acc, [p.id]: { isNewOffer: false } }), {});
        offers.forEach(o => this._chbs[o.productId][o.id] = true);
    }

    private _generateForm(productId: number): FormGroup {
        const product: Product = this._view$.value.productViews.find(pv => pv.product.id === productId).product;
        return new FormGroup({
            id: new FormControl<number>(null),
            name: new FormControl<string>(`New offer for ${product.name}`),
            price: new FormControl<number>(null),
            productId: new FormControl<number>(productId),
        });
    }

    init() {
        combineLatest([
            this._data.getTrade(),
            this._fetchOffersEmitter$.pipe(switchMap(() => this._data.getOffers())),
        ]).pipe(
            tap(([trade, offers]) => {
                this._initChbsModel(trade.products, offers);

                const productsMap: Record<number, ProductView> = trade.products.reduce((acc, p) => ({ ...acc, [p.id]: { product: p, offers: [] } }), {});
                offers.forEach(o => productsMap[o.productId].offers.push(o));
                this._view$.next({ trade, productViews: Object.values(productsMap) })
            })
        ).subscribe();
    }

    goToPreviousForm() {
        const currentIndex = this._activeFormIndex$.value;
        this._activeFormIndex$.next(currentIndex - 1);
    }

    publishOffer() {
        const activeFormIndex: number = this._activeFormIndex$.value;
        const currentForm: FormGroup = this.forms[activeFormIndex];
        const idControl: FormControl = currentForm.get('id') as FormControl;
        const isCreateFlow: boolean = !idControl.value;

        (isCreateFlow ? this.createOffer(currentForm.value) : this.editOffer(currentForm.value))
            .pipe(
                tap(id => {
                    if (isCreateFlow) {
                        idControl.setValue(id);
                    }
                    if (this._activeFormIndex$.value === this.forms.length - 1) {
                        this._createOffersModalRef.close(true);
                    } else {
                        this._activeFormIndex$.next(activeFormIndex + 1);
                    }
                }),
            )
            .subscribe();
    }

    createOffer(offer: Offer): Observable<number> {
        const newOfferId = this._data.createOffer(offer);
        this.createdOfferIds.push(newOfferId);
        this.onOfferToggled(offer.productId, offer.id, true);
        return of(newOfferId).pipe(delay(400));
    }

    editOffer(formValue: Offer): Observable<number> {
        this._data.editOffer(formValue);
        return of(formValue.id).pipe(delay(400));
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

    showModal() {
        this._activeFormIndex$.next(0);
        let productIds: number[] = Object.keys(this._chbs).map(value => +value);
        productIds = productIds.filter(p => this._chbs[p].isNewOffer);
        this._forms = productIds.map(productId => this._generateForm(productId));

        this._createOffersModalRef = this._dialogService.open(PpsSendOffersCreateModalComponent, {});
        this._createOffersModalRef.onClose
            .pipe(
                takeUntil(this._destroy$),
                tap(() => this._fetchOffersEmitter$.next(true)),
            )
            .subscribe()
    }

    submit() {
        console.log(this._chbs);
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

export interface Chbs {
    [productId: number]: {
        [offerId: number]: boolean;
        isNewOffer: boolean;
    };
}