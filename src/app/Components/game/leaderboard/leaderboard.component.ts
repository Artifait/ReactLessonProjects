import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PlayerStats } from '../../../data/interfaces/player-stats.interface';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent {
  @Input() leaderboard: PlayerStats[] = [];
}
