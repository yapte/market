import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-workgroups',
  templateUrl: './trade-form-workgroups.component.html',
  styleUrls: ['./trade-form-workgroups.component.scss']
})
export class TradeFormWorkgroupsComponent {
  workgroups: SelectItem[] = [1, 2, 3, 4, 5, 6, 7].map(i => ({ label: `Рабочая группа №${i}`, value: i }));
  control: FormControl = this._facade.getField('main', 'workGroupIds') as FormControl;

  constructor(private _facade: TradeFormFacadeService) { }
}
