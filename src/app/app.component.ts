import { Component } from '@angular/core';
import { NoteComponent } from './components/note/note.component';
import { NoteInputComponent } from './components/note-input/note-input.component';
import { NoteFilterComponent } from './components/note-filter/note-filter.component';
import { NgForOf } from '@angular/common';

interface Note {
  id: number;
  text: string;
  liked: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf, NoteComponent, NoteInputComponent, NoteFilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  notes: Note[] = [
    {
      id: 1,
      text: 'Сейчас я изучаю библиотеку на основе JavaScript - React.js!',
      liked: false,
    },
    {
      id: 2,
      text: 'Осталось 4 часа до дедлайна. Надеюсь успею!',
      liked: false,
    },
    { id: 3, text: 'Создаю первое приложение...', liked: false },
  ];

  filter: 'all' | 'liked' = 'all';
  query = '';

  likedCount() {
    return this.notes.filter((n) => n.liked).length;
  }

  filteredNotes() {
    return this.notes
      .filter(
        (n) => this.filter === 'all' || (this.filter === 'liked' && n.liked)
      )
      .filter((n) => n.text.toLowerCase().includes(this.query.toLowerCase()));
  }

  onLike(id: number) {
    const n = this.notes.find((x) => x.id === id);
    if (n) n.liked = !n.liked;
  }

  onDelete(id: number) {
    this.notes = this.notes.filter((x) => x.id !== id);
  }

  onCreate(text: string) {
    this.notes = [...this.notes, { id: Date.now(), text, liked: false }];
  }
}
