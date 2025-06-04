import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.scss'],
})
export class ResultDisplayComponent {
  @Input() playerChoice: 'rock' | 'paper' | 'scissors' | null = null;
  @Input() compChoice: 'rock' | 'paper' | 'scissors' | null = null;
  @Input() outcome: 'win' | 'lose' | 'draw' | null = null;

  getIcon(choice: 'rock' | 'paper' | 'scissors' | null): string {
    switch (choice) {
      case 'rock':
        return '✊';
      case 'paper':
        return '🖐️';
      case 'scissors':
        return '✌️';
      default:
        return '';
    }
  }
}
