import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TenantCode } from '../helpers/tenant-code.enum';
import { TenantService } from './tenant.service';

@Directive({
  selector: '[showIfTenant]'
})
export class ShowIfTenantDirective implements OnInit {
  @Input() showIfTenant: TenantCode[];

  constructor(
    private _templateRef: TemplateRef<unknown>,
    private _vcr: ViewContainerRef,
    private _tenantService: TenantService,
  ) { }

  ngOnInit(): void {
    if (this.showIfTenant.includes(this._tenantService.currentTenant)) {
      this._vcr.createEmbeddedView(this._templateRef);
    } else {
      this._vcr.clear();
    }
  }
}
