import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-product-position-name',
  templateUrl: './trade-form-items-product-position-name.component.html',
  styleUrls: ['./trade-form-items-product-position-name.component.scss']
})
export class TradeFormItemsProductPositionNameComponent {
  @Input() index: number;
  control: FormControl;

  constructor(private _facade: TradeFormFacadeService) { }

  ngOnInit(): void {
    if (this.index === undefined) {
      console.error('@Input() index = undefined');
      return;
    }
    this.control = this._facade.getProductField(this.index, 'okved2Code') as FormControl;
  }
}
