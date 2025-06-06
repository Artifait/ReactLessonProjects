import { Component, OnInit } from '@angular/core';
import { CartoonsService } from '../../data/services/cartoons.service';
import { Cartoon } from '../../data/interfaces/cartoon.interface';
import { NgIf } from '@angular/common';
import { CartoonsListComponent } from '../../Components/cartoons/cartoons-list/cartoons-list.component';

@Component({
  selector: 'app-cartoons-page',
  standalone: true,
  imports: [NgIf, CartoonsListComponent],
  templateUrl: './cartoons-page.component.html',
  styleUrls: ['./cartoons-page.component.scss'],
})
export class CartoonsPageComponent implements OnInit {
  cartoons: Cartoon[] = [];
  loading = false;
  error = '';

  constructor(private cartoonsService: CartoonsService) {}

  ngOnInit() {
    this.fetchCartoons();
  }

  fetchCartoons() {
    this.loading = true;
    this.error = '';
    this.cartoonsService.getCartoons().subscribe({
      next: (data) => {
        this.cartoons = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Не удалось загрузить мультфильмы';
        this.loading = false;
      },
    });
  }
}
