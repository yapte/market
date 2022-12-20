import { Injectable } from "@angular/core";
import { TenantCode } from "../helpers/tenant-code.enum";
import { TenantService } from "./tenant.service";

@Injectable({ providedIn: 'root' })
/** 
 * Этот сервис должен использваться ТОЛЬКО для вставки тенантозависимыз текстов
 * Если есть дополнительная логика, на этот сервис завязываться НЕЛЬЗЯ
 * Например: контрол стал обязательным для заполнения и нужно вставить * (required):
 *   - либо создать отдельный компонент с нужной реализацией и отображать его для нужного тенанта (например, с помощью директивы *showIfTenant)
 */
export class TenantDependentText {
    constructor(private _tenantService: TenantService) { }

    private _isTenantIn(tenants: TenantCode[]) {
        return tenants.includes(this._tenantService.currentTenant);
    }

    private _isTenantNotIn(tenants: TenantCode[]) {
        return !tenants.includes(this._tenantService.currentTenant);
    }


    get TRADE_NAME_TITLE(): string {
        if (this._isTenantIn([TenantCode.PreliminaryOffer]))
            return 'Наименование закупки';

        return 'Наименование заказа';
    }

    get TRADE_NAME_PLACEHOLDER(): string {
        if (this._isTenantIn([TenantCode.PreliminaryOffer]))
            return 'Введите название ЗАКУПКИ или оно будет выбрано из наименования товара';

        return 'Введите название ЗАКАЗА или оно будет выбрано из наименования товара';
    }

    get TRADE_NAME_VALIDATION(): string {
        if (this._isTenantIn([TenantCode.PreliminaryOffer]))
            return 'Необходимо обязательно заполнить наименование ЗАКУПКИ 2323';

        return 'Необходимо обязательно заполнить наименование ЗАКАЗА';
    }
}