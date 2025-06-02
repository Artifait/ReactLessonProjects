export interface GameResult {
  id?: number;
  playerName: string;
  outcome: 'win' | 'lose' | 'draw';
  playedAt?: string;
}
