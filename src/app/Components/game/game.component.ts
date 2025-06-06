import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StatsService } from '../../data/services/stats.service';
import { GameResult } from '../../data/interfaces/game-result.interface';
import { PlayerStats } from '../../data/interfaces/player-stats.interface';

import { ChoiceButtonsComponent } from './choice-buttons/choice-buttons.component';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ChoiceButtonsComponent,
    ResultDisplayComponent,
    LeaderboardComponent,
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  playerName = '';
  playerStats?: PlayerStats;
  leaderboard: PlayerStats[] = [];

  playerChoice: 'rock' | 'paper' | 'scissors' | null = null;
  compChoice: 'rock' | 'paper' | 'scissors' | null = null;
  outcome: 'win' | 'lose' | 'draw' | null = null;

  constructor(private statsService: StatsService) {}

  /*
   * Вызывается при выборе игрока:
   * 1) генерируем выбор компьютера
   * 2) сравниваем с выбором игрока
   * 3) отправляем результат на сервер
   * 4) запрашиваем обновлённую статистику
   */
  onPlayerChoose(choice: 'rock' | 'paper' | 'scissors') {
    if (!this.playerName.trim()) {
      alert('Введите имя игрока');
      return;
    }
    if (this.playerName.length > 10) {
      alert('Ограничение по длине имени - 10');
      return;
    }

    this.playerChoice = choice;
    this.compChoice = this.getComputerChoice();
    this.outcome = this.resolveOutcome(this.playerChoice, this.compChoice);

    const result: GameResult = {
      playerName: this.playerName,
      outcome: this.outcome,
    };

    this.statsService.addGameResult(result).subscribe({
      next: () => {
        this.fetchPlayerStats();
        this.fetchLeaderboard();
      },
      error: (err) => console.error('Ошибка при отправке результата:', err),
    });
  }

  private getComputerChoice(): 'rock' | 'paper' | 'scissors' {
    const options: Array<'rock' | 'paper' | 'scissors'> = [
      'rock',
      'paper',
      'scissors',
    ];
    const idx = Math.floor(Math.random() * options.length);
    return options[idx];
  }

  private resolveOutcome(
    player: 'rock' | 'paper' | 'scissors',
    comp: 'rock' | 'paper' | 'scissors'
  ): 'win' | 'lose' | 'draw' {
    if (player === comp) return 'draw';
    if (
      (player === 'rock' && comp === 'scissors') ||
      (player === 'paper' && comp === 'rock') ||
      (player === 'scissors' && comp === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  }

  private fetchPlayerStats() {
    this.statsService.getPlayerStats(this.playerName).subscribe({
      next: (stats) => (this.playerStats = stats),
      error: () => (this.playerStats = undefined),
    });
  }

  private fetchLeaderboard() {
    this.statsService.getLeaderboard().subscribe({
      next: (list) => (this.leaderboard = list),
      error: (err) => console.error('Ошибка при получении лидерборда:', err),
    });
  }
}
