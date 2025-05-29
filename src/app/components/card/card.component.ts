import { Component, Input } from '@angular/core';
import { Card } from '../../data/interface/card.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() props!: Card;
}
