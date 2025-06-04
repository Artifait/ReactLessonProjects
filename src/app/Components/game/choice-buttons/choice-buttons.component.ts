import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choice-buttons',
  standalone: true,
  imports: [],
  templateUrl: './choice-buttons.component.html',
  styleUrls: ['./choice-buttons.component.scss'],
})
export class ChoiceButtonsComponent {
  @Output() choice = new EventEmitter<'rock' | 'paper' | 'scissors'>();

  onChoose(option: 'rock' | 'paper' | 'scissors') {
    this.choice.emit(option);
  }
}
