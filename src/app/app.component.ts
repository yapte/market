import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TenantCode } from './helpers/tenant-code.enum';
import { TenantService } from './tenants/tenant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'market-features';

  currentTenant$: Observable<TenantCode> = this._tenantService.currentTenant$;
  constructor(private _tenantService: TenantService) { }
}
