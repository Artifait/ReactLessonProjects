import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss'],
})
export class NoteInputComponent {
  @Output() create = new EventEmitter<string>();
  text = '';

  add() {
    const t = this.text.trim();
    if (t) {
      this.create.emit(t);
      this.text = '';
    }
  }
}
