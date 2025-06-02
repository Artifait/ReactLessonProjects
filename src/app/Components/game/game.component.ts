import { Component } from '@angular/core';
import { StatsService } from '../../data/services/stats.service';
import { GameResult } from '../../data/interfaces/game-result.interface';
import { PlayerStats } from '../../data/interfaces/player-stats.interface';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
})
export class GameComponent {
  playerName = '';
  playerStats?: PlayerStats;
  leaderboard: PlayerStats[] = [];

  constructor(private statsService: StatsService) {}

  /**
   * Вызывается при клике на кнопку "Играть":
   * 1) генерируем выбор компьютера
   * 2) сравниваем с выбором игрока
   * 3) отправляем результат на сервер
   * 4) запрашиваем обновлённую статистику
   */
  play(choice: 'rock' | 'paper' | 'scissors') {
    if (!this.playerName.trim()) {
      alert('Введите имя игрока');
      return;
    }

    const outcome = this.resolveOutcome(choice, this.getComputerChoice());

    const result: GameResult = {
      playerName: this.playerName,
      outcome,
    };

    this.statsService.addGameResult(result).subscribe({
      next: () => {
        // После успешной отправки — обновляем статистику игрока и лидерборд
        this.fetchPlayerStats();
        this.fetchLeaderboard();
      },
      error: (err) => {
        console.error('Ошибка при отправке результата:', err);
      },
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

  /** Запрос статистики по текущему игроку */
  private fetchPlayerStats() {
    this.statsService.getPlayerStats(this.playerName).subscribe({
      next: (stats) => (this.playerStats = stats),
      error: () => (this.playerStats = undefined),
    });
  }

  /** Запрос лидерборда */
  private fetchLeaderboard() {
    this.statsService.getLeaderboard().subscribe({
      next: (list) => (this.leaderboard = list),
      error: (err) => console.error('Ошибка при получении лидерборда:', err),
    });
  }
}
