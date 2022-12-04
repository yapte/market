import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { INVITATION_METHODS } from '../../constants/invitation-methods.const';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-invitation-auto-method',
  templateUrl: './trade-form-invitation-auto-method.component.html',
  styleUrls: ['./trade-form-invitation-auto-method.component.scss']
})
export class TradeFormInvitationAutoMethodComponent {
  methods: SelectItem[] = INVITATION_METHODS;
  control: FormControl = this._facade.getField('invitation', 'invitationMethod') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
