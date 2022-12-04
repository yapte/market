import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { OKEI_LIST } from '../../constants/okei-list.const';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-product-okei',
  templateUrl: './trade-form-items-product-okei.component.html',
  styleUrls: ['./trade-form-items-product-okei.component.scss']
})
export class TradeFormItemsProductOkeiComponent {
  @Input() index: number;
  control: FormControl;
  suggestions: SelectItem[];

  constructor(private _facade: TradeFormFacadeService) { }

  ngOnInit(): void {
    if (this.index === undefined) {
      console.error('@Input() index = undefined');
      return;
    }
    this.control = this._facade.getProductField(this.index, 'okeiObject') as FormControl;
  }

  filterOkei(e: { originalEvent: InputEvent, query: string }) {
    this.suggestions = OKEI_LIST.filter(s => s.value.toLowerCase().includes(e.query.toLowerCase().trim()))
  }
}
