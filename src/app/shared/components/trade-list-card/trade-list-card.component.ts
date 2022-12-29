import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trade-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trade-list-card.component.html',
  styleUrls: ['./trade-list-card.component.scss']
})
export class TradeListCardComponent {
  @Input() trade: any;
}
