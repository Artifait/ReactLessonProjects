import { Component, Input } from '@angular/core';
import { Cartoon } from '../../../data/interfaces/cartoon.interface';
import { NgFor } from '@angular/common';
import { CartoonCardComponent } from '../cartoon-card/cartoon-card.component';

@Component({
  selector: 'app-cartoons-list',
  standalone: true,
  imports: [NgFor, CartoonCardComponent],
  templateUrl: './cartoons-list.component.html',
  styleUrls: ['./cartoons-list.component.scss'],
})
export class CartoonsListComponent {
  @Input() cartoons: Cartoon[] = [];
}
