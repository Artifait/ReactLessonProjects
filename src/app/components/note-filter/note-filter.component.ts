import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-filter.component.html',
  styleUrls: ['./note-filter.component.scss'],
})
export class NoteFilterComponent {
  @Input() filter: 'all' | 'liked' = 'all';
  @Output() filterChange = new EventEmitter<'all' | 'liked'>();
  @Output() searchChange = new EventEmitter<string>();

  query = '';

  setFilter(f: 'all' | 'liked') {
    this.filter = f;
    this.filterChange.emit(f);
  }

  changeQuery() {
    this.searchChange.emit(this.query);
  }
}
