import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  standalone: true,
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() note!: { id: number; text: string; liked: boolean };
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  toggleLike() {
    this.like.emit(this.note.id);
  }
}
