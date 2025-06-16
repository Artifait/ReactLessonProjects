import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TagCardComponent } from '../tag-card/tag-card.component';
import { Task } from '../../models/task';
import { Tag } from '../../models/tag';
import { TagSelectorComponent } from '../tag-selector/tag-selector.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagCardComponent,
    TagSelectorComponent,
  ],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Input() availableTags: Tag[] = [];
  @Output() editTask = new EventEmitter<Task>();

  editing = false;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.task.title],
      description: [this.task.description],
    });
  }

  toggleEdit() {
    this.editing = !this.editing;
    if (!this.editing) {
      this.editTask.emit({ ...this.task, ...this.form.value });
    }
  }

  onTagsChange(newTags: Tag[]) {
    this.editing = false;
    this.editTask.emit({ ...this.task, tags: newTags });
  }
}
