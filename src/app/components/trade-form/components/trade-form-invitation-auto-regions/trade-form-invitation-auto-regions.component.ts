import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { REGIONS } from '../../constants/regions.conts';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-invitation-auto-regions',
  templateUrl: './trade-form-invitation-auto-regions.component.html',
  styleUrls: ['./trade-form-invitation-auto-regions.component.scss']
})
export class TradeFormInvitationAutoRegionsComponent {
  regions: SelectItem[] = REGIONS;
  control: FormControl = this._facade.getField('invitation', 'invitationRegions') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
