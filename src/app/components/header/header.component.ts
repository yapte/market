import { Component, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { TenantCode } from 'src/app/helpers/tenant-code.enum';
import { TenantService } from 'src/app/tenants/tenant.service';
import { TENANT_NAMES } from 'src/app/tenants/tenant-names.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  TENANT_NAMES = TENANT_NAMES;
  isTenantDialogShown = false;
  tenantList: TenantCode[] = [
    TenantCode.Market,
    TenantCode.PreliminaryOffer,
    TenantCode.Vitrina,
  ];

  currentTenant$: Observable<TenantCode> = this._tenantService.currentTenant$;
  buttonText$: Observable<string> = this._tenantService.currentTenant$
    .pipe(
      map(code => `Текущий тенант: ${code ? TENANT_NAMES[code] : 'Смена тенанта'}`),
      startWith('Выбрать тенант...'),
    );
  constructor(private _tenantService: TenantService) { }

  showTenantDialog() {
    this.isTenantDialogShown = true;
  }

  // hideTenantDialog() {
  //   this.isTenantDialogShown = false;
  // }

  setTenantCode(tenantCode: TenantCode) {
    this._tenantService.setTenantCode(tenantCode);
  }

}
