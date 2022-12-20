import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { TenantCode } from '../helpers/tenant-code.enum';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private _currentTenant$: BehaviorSubject<TenantCode> = new BehaviorSubject<TenantCode>(TenantCode.Market);
  currentTenant$: Observable<TenantCode> = this._currentTenant$
    .pipe(shareReplay(1));
  get currentTenant(): TenantCode {
    return this._currentTenant$.value;
  }

  setTenantCode(tenant: TenantCode) {
    this._currentTenant$.next(null);
    setTimeout(() => {
      this._currentTenant$.next(tenant);
    }, 500);
  }
}
