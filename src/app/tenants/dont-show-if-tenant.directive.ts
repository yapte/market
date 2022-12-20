import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TenantCode } from '../helpers/tenant-code.enum';
import { TenantService } from './tenant.service';

@Directive({
  selector: '[dontShowIfTenant]'
})
export class DontShowIfTenantDirective implements OnInit {
  @Input() dontShowIfTenant: TenantCode[];

  constructor(
    private _templateRef: TemplateRef<unknown>,
    private _vcr: ViewContainerRef,
    private _tenantService: TenantService,
  ) { }

  ngOnInit(): void {
    if (this.dontShowIfTenant.includes(this._tenantService.currentTenant)) {
      this._vcr.clear();
    } else {
      this._vcr.createEmbeddedView(this._templateRef);
    }
  }
}
