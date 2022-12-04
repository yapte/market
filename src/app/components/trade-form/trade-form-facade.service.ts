import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith, takeUntil, tap } from 'rxjs/operators';

import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Destroy$ } from 'src/app/helpers/destroy';
import { Okpd2 } from 'src/app/helpers/okpd2.interface';

@Injectable()
export class TradeFormFacadeService extends Destroy$ {
    private _form: FormGroup;

    get form(): FormGroup {
        return this._form;
    }

    // Form change subscriptions
    isManualEnterPriceForEachProduct$: Observable<boolean>;
    productSums$: Observable<number[]>;
    isRemoveProductButtonVisible$: Observable<boolean>;
    rateVat$: Observable<number>;
    totalSumWithoutVat$: Observable<number>;
    namePlaceholder$: Observable<string>;
    invitationMethod$: Observable<number>;
    okpd2Codes$: Observable<Okpd2[]>;

    // TODO: Методы с генерацией форм можно вфнести в отдельный класс со СТАТИЧЕСКИМИ методами,
    // чтобы никому не приходило в голову вставлять этот класс с помощью DI.
    private _generateForm(): void {
        this._form = new FormGroup({
            main: new FormGroup({
                tradeName: new FormControl('', [Validators.required]),
                description: new FormControl(),
                smsp: new FormControl(),
                isImportPhaseout: new FormControl(),
                isOnlySmp: new FormControl(),
                tradeDocuments: new FormControl(),
                isSendToEis: new FormControl(),
                workGroupIds: new FormControl(),
            }),
            items: new FormGroup({
                products: new FormArray([
                    this._generateProductFormItem(),
                ]),
                conditionsOfVat: new FormControl(),
                initialPriceWithoutVat: new FormControl(),
                isManualEnterPriceForEachProduct: new FormControl(),
                initialPriceWithVat: new FormControl(),
                rateVat: new FormControl({ value: null, disabled: true }),
                isLotPriceWithVat: new FormControl(false),
            }),
            details: new FormGroup({
                deliveryRegion: new FormControl(),
                deliveryPlace: new FormControl(),
                deliveryTerms: new FormControl(),
                kladrRegionCode: new FormControl(),
                kladrRegionCodes: new FormControl(),
                isContractInElectronicForm: new FormControl(true),
                conditionsOfPayment: new FormControl(),
                isImmediate: new FormControl(),
                fillingApplicationEndDate: new FormControl(),
                planedDealSignDate: new FormControl(),
                contactInfo: new FormGroup({
                    fio: new FormControl('', [Validators.required]),
                    contactPhone: new FormControl(),
                    contactPhoneTail: new FormControl(),
                    contactEmail: new FormControl(),
                }),
                minQuantityOfDeliveredGoods: new FormControl(),
                characteristicFileGuid: new FormControl(),
                invitedOrganizationIds: new FormControl(),
            }),
            invitation: new FormGroup({
                invitations: new FormControl([]),
                invitationMethod: new FormControl(1),
                isHideApplication: new FormControl(),

                invitationRegions: new FormControl([]),
                invitationTags: new FormControl([]),
            }),
            eisInfo: new FormGroup({
                oosPurchaseMethodCode: new FormControl(),
                notDishonest: new FormControl(),
                isEmergency: new FormControl(),
                applicationRequestOrder: new FormControl(),
                resultsReviewOrder: new FormControl(),
                planRegistrationNumber: new FormControl(),
                planPositionNumber: new FormControl(),
                isSupplierCanCreateContract: new FormControl(),
            }),
        });

        // this.isSendToEis$ = this.getField('main', 'isSendToEis').valueChanges;

        this.namePlaceholder$ = (this.getField('items', 'products') as FormArray)
            .valueChanges.pipe(
                takeUntil(this._destroy$),
                map(value => {
                    let name = value[0].name;
                    if (value.length === 1) return name;
                    return `${name} и т.д.`
                }),
                startWith('Введите название заказа или оно будет выбрано из наименования товара'),
                distinctUntilChanged(),
            );

        this.isManualEnterPriceForEachProduct$ = this.getField('items', 'isManualEnterPriceForEachProduct').valueChanges;

        this.productSums$ = this.getField('items', 'products').valueChanges
            .pipe(map((ps: { price: number, quantity: number }[]) => ps.map(p => p.price * p.quantity)));

        this.isRemoveProductButtonVisible$ = (this.getField('items', 'products') as FormArray)
            .valueChanges.pipe(
                takeUntil(this._destroy$),
                map(value => value.length > 1),
                shareReplay(1),
            );

        const rateVatControl = this.getField('items', 'rateVat');
        this.getField('items', 'isLotPriceWithVat').valueChanges.pipe(
            takeUntil(this._destroy$),
            tap((value) => {
                if (value) {
                    rateVatControl.enable();
                    rateVatControl.setValue(0);
                } else {
                    rateVatControl.disable();
                    rateVatControl.setValue(null);
                }
            }),
        ).subscribe();

        this.rateVat$ = rateVatControl.valueChanges.pipe(
            takeUntil(this._destroy$),
            startWith(rateVatControl.value),
            shareReplay(1),
        );

        this.totalSumWithoutVat$ = this.form.valueChanges.pipe(
            map(value => {
                if (value.items.isManualEnterPriceForEachProduct) {
                    return +(value.items.products as any[]).reduce((acc, p) => acc + p.quantity * p.price, 0)
                } else {
                    return +value.items.initialPriceWithoutVat;
                }
            }),
            shareReplay(1),
        );

        const invitationMethodControl = this.getField('invitation', 'invitationMethod')
        this.invitationMethod$ = invitationMethodControl.valueChanges.pipe(
            startWith(invitationMethodControl.value),
            shareReplay(1),
        );

        this.okpd2Codes$ = (this.getField('items', 'products') as FormArray)
            .valueChanges.pipe(
                map(products => products.reduce((acc: any[], p: any) => [...acc, ...p.okpd2Codes], [])),
            );
    }

    private _generateProductFormItem(isManualInput = false): FormGroup {
        return new FormGroup({
            id: new FormControl(),
            name: new FormControl(),
            quantity: new FormControl(),
            okeiObject: new FormControl(),
            classificatorCode: new FormControl(),
            price: new FormControl({ value: null, disabled: !isManualInput }),
            sum: new FormControl(),
            classificatorType: new FormControl(),
            classificatorDescription: new FormControl(),
            type: new FormControl(),
            vatRate: new FormControl(),
            sumVat: new FormControl(),
            mark: new FormControl(),
            parameters: new FormControl(),
            gost: new FormControl(),
            description: new FormControl(),
            okved2Code: new FormControl(),
            shortOkeiName: new FormControl(),
            okpd2Codes: new FormControl(),
            userDictionaryPositionNumber: new FormControl(),
            userDictionaryPositionName: new FormControl(),
        });
    }

    init() {
        this._generateForm();
    }

    getField(groupName: string, controlName: string): AbstractControl {
        return this._form.get(groupName).get(controlName);
    }

    getProductField(index: number, controlName: string): FormControl {
        const itemsFormArray: FormArray = this.getField('items', 'products') as FormArray;
        return itemsFormArray.controls[index].get(controlName) as FormControl;
    }

    getContactField(controlName: string): FormControl {
        return this.getField('details', 'contactInfo').get(controlName) as FormControl;
    }

    appendProduct() {
        const isManualInput: boolean = this.getField('items', 'isManualEnterPriceForEachProduct').value;
        (this.getField('items', 'products') as FormArray)
            .push(this._generateProductFormItem(isManualInput));
    }

    removeProduct(index: number) {
        (this.getField('items', 'products') as FormArray)
            .removeAt(index);
    }
}