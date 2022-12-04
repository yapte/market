import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-items-product-description',
  templateUrl: './trade-form-items-product-description.component.html',
  styleUrls: ['./trade-form-items-product-description.component.scss']
})
export class TradeFormItemsProductDescriptionComponent {
  @Input() index: number;
  control: FormControl;

  constructor(private _facade: TradeFormFacadeService) { }

  ngOnInit(): void {
    if (this.index === undefined) {
      console.error('@Input() index = undefined');
      return;
    }
    this.control = this._facade.getProductField(this.index, 'description') as FormControl;
  }
}
