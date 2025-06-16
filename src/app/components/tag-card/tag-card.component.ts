import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../../models/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.scss'],
})
export class TagCardComponent {
  @Input() tag!: Tag;
  @Output() remove = new EventEmitter<Tag>();

  onRemove() {
    this.remove.emit(this.tag);
  }
}
