import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GameResult } from '../interfaces/game-result.interface';
import { PlayerStats } from '../interfaces/player-stats.interface';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private http: HttpClient = inject(HttpClient);

  private readonly baseUrl = 'http://94.125.100.107:13080/api';
  // private readonly baseUrl = 'http://127.0.0.1:13080/api';

  /**
   * Отправить результат игры на сервер
   * (конечно лучше всего было бы вынести логику
   *  определения выигрыша игрока на сервер,
   *  тоесть мы бы отправляли только выбор игрока)
   * @param result
   */
  addGameResult(result: GameResult): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/result`, {
      playerName: result.playerName,
      outcome: result.outcome,
    });
  }

  /**
   * Получить статистику конкретного игрока
   * @param playerName Имя игрока
   */
  getPlayerStats(playerName: string): Observable<PlayerStats> {
    return this.http.get<PlayerStats>(
      `${this.baseUrl}/stats/${encodeURIComponent(playerName)}`
    );
  }

  /**
   * Получить лидерборд N=10.
   */
  getLeaderboard(): Observable<PlayerStats[]> {
    return this.http.get<PlayerStats[]>(`${this.baseUrl}/leaderboard`);
  }
}
