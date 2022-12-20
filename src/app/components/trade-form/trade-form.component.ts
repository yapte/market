import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TradeFormFacadeService } from './trade-form-facade.service';
import { HandledError } from './../../helpers/handled-error';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { Okpd2 } from 'src/app/helpers/okpd2.interface';
import { TenantCode } from 'src/app/helpers/tenant-code.enum';

@Component({
    selector: 'trade-form',
    templateUrl: './trade-form.component.html',
    styleUrls: ['./trade-form.component.scss'],
    providers: [TradeFormFacadeService],
})
export class TradeFormComponent {
    TenantCode = TenantCode;
    form: FormGroup;
    isRemoveProductButtonVisible$: Observable<boolean>;
    invitationMethod$: Observable<number>;
    okpd2Codes$: Observable<Okpd2[]>;
    get products(): AbstractControl[] {
        return (this._facade.getField('items', 'products') as FormArray).controls;
    }

    constructor(private _facade: TradeFormFacadeService) { }

    ngOnInit(): void {
        this._facade.init();
        this.form = this._facade.form;
        // this.form.valueChanges.subscribe(value => console.log(value));
        this.isRemoveProductButtonVisible$ = this._facade.isRemoveProductButtonVisible$;
        this.invitationMethod$ = this._facade.invitationMethod$;
        this.okpd2Codes$ = this._facade.okpd2Codes$;
    }

    addProduct() {
        this._facade.appendProduct();
    }

    removeProduct(index: number) {
        this._facade.removeProduct(index);
    }

    submit() {
        console.log(this.form.value);
    }
}