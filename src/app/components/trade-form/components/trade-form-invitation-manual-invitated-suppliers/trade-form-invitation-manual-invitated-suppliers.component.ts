import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { Org } from 'src/app/helpers/org.interface';
import { ORGS } from '../../constants/orgs.const';
import { REGIONS } from '../../constants/regions.conts';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-invitation-manual-invitated-suppliers',
  templateUrl: './trade-form-invitation-manual-invitated-suppliers.component.html',
  styleUrls: ['./trade-form-invitation-manual-invitated-suppliers.component.scss']
})
export class TradeFormInvitationManualInvitatedSuppliersComponent {
  regions: SelectItem[] = [];
  invitedSuppliers: string[] = [];
  suppliers: Org[];
  control: FormControl = this._facade.getField('invitation', 'invitations') as FormControl;

  form: FormGroup = new FormGroup({
    nameOrInn: new FormControl(),
    region: new FormControl(),
  });

  @ViewChild('autocomplete', { read: AutoComplete }) autocompleteRef: AutoComplete

  constructor(private _facade: TradeFormFacadeService) { }

  filterOkei(e: { originalEvent: InputEvent, query: string }) {
    this.suppliers = ORGS.filter(o => o.fullName.toLowerCase().includes(e.query.toLowerCase().trim()))
  }

  filterRegion(e: { originalEvent: InputEvent, query: string }) {
    this.regions = REGIONS.filter(o => o.label.toLowerCase().includes(e.query.toLowerCase().trim()))
  }

  addOrg(org: Org) {
    const orgInfo: string = `${org.fullName} (${org.inn})`;
    if (!this.invitedSuppliers.includes(orgInfo)) {
      this.invitedSuppliers.push(orgInfo);
      this.control.setValue([...this.invitedSuppliers]);
    }
    this.autocompleteRef.clear();
  }

  addEmail(e: Event) {
    const emailControl = e.target as HTMLInputElement;
    const email: string = emailControl.value;
    if (!this.invitedSuppliers.includes(email)) {
      this.invitedSuppliers.push(email);
      this.control.setValue([...this.invitedSuppliers]);
      emailControl.value = '';
    }

    e.preventDefault();
  }

  remove(name: string) {
    this.invitedSuppliers = this.invitedSuppliers.filter(s => s !== name);
    this.control.setValue([...this.invitedSuppliers]);
  }

  search(e: Event) {
    console.log(this.form.value);
  }
}
