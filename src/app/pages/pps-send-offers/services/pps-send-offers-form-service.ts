import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Product } from "./pps-send-offers-data.service";

@Injectable()
export class PpsSendOffersFormService {
    private _forms: FormGroup[] = [];

    get forms(): FormGroup[] {
        return this._forms;
    }

    private _generateForm(productId: number): FormGroup {
        return new FormGroup({
            id: new FormControl<number>(null),
            name: new FormControl<string>(`New offer for Product${productId}`),
            price: new FormControl<number>(null),
            productId: new FormControl<number>(productId),
        });
    }

    generateForms(productIds: number[]) {
        this._forms = productIds.map(productId => this._generateForm(productId));
    }
}