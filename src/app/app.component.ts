import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { DbService } from './data/services/db.service';
import { Card } from './data/interface/card.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NgLesson';
  dbService: DbService = inject(DbService);
  info: Card[] = [];

  constructor() {
    this.dbService.getCardInfo().subscribe((x: Card[]) => {
      this.info = x;
    });
  }
}
