import { Routes } from '@angular/router';
import { GamePageComponent } from './Pages/game-page/game-page.component';
import { CartoonsPageComponent } from './Pages/cartoons-page/cartoons-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cartoons',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GamePageComponent,
  },
  {
    path: 'cartoons',
    component: CartoonsPageComponent,
  },
];
