import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pps-product',
  templateUrl: './pps-product.component.html',
  styleUrls: ['./pps-product.component.scss']
})
export class PpsProductComponent {
  @Input() index: number;
  @Input() product: any;
}
