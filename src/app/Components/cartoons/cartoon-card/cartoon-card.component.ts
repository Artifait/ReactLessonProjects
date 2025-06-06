import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Cartoon } from '../../../data/interfaces/cartoon.interface';

@Component({
  selector: 'app-cartoon-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './cartoon-card.component.html',
  styleUrls: ['./cartoon-card.component.scss'],
})
export class CartoonCardComponent {
  @Input() cartoon!: Cartoon;
}
