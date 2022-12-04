import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-invitation-auto-is-hide-application',
  templateUrl: './trade-form-invitation-auto-is-hide-application.component.html',
  styleUrls: ['./trade-form-invitation-auto-is-hide-application.component.scss']
})
export class TradeFormInvitationAutoIsHideApplicationComponent {
  control: FormControl = this._facade.getField('invitation', 'isHideApplication') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
