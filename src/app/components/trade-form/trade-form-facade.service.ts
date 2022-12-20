import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith, takeUntil, tap } from 'rxjs/operators';

import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Destroy$ } from 'src/app/helpers/destroy';
import { Okpd2 } from 'src/app/helpers/okpd2.interface';
import { TradeFormGenerator } from './trade-form-generator.factory';
import { TenantDependentText } from 'src/app/tenants/tenant-dependent-text.service';
import { TenantService } from 'src/app/tenants/tenant.service';

@Injectable()
export class TradeFormFacadeService extends Destroy$ {
    private _form: FormGroup;

    constructor(
        private _tenantDependentText: TenantDependentText,
        private _tenantService: TenantService,
    ) {
        super();
    }

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
        this._form = TradeFormGenerator.generateForm(this._tenantService.currentTenant);
        // this.isSendToEis$ = this.getField('main', 'isSendToEis').valueChanges;

        this.namePlaceholder$ = (this.getField('items', 'products') as FormArray)
            .valueChanges.pipe(
                takeUntil(this._destroy$),
                map(value => {
                    let name = value[0].name;
                    if (value.length === 1) return name;
                    return `${name} и т.д.`
                }),
                startWith(this._tenantDependentText.TRADE_NAME_PLACEHOLDER),
                startWith(''),
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
            .push(TradeFormGenerator.generateProductFormItem(this._tenantService.currentTenant, isManualInput));
    }

    removeProduct(index: number) {
        (this.getField('items', 'products') as FormArray)
            .removeAt(index);
    }
}