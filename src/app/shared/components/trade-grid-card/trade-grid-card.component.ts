import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trade-grid-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trade-grid-card.component.html',
  styleUrls: ['./trade-grid-card.component.scss']
})
export class TradeGridCardComponent {
  @Input() trade: any;
}
