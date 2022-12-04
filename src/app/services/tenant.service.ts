import { Injectable } from '@angular/core';
import { TenantCode } from '../helpers/tenant-code.enum';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private _currentTenant: TenantCode = TenantCode.Market;
  get currentTenant(): TenantCode {
    return this._currentTenant;
  }

  constructor() { }

  setTenantCode(tenant: TenantCode) {
    this._currentTenant = tenant;
  }
}
