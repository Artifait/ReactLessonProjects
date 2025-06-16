import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { Tag } from '../../models/tag';
import { TaskService } from '../../services/task.service';
import { TagSelectorComponent } from '../tag-selector/tag-selector.component';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TagSelectorComponent],
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent {
  @Output() submit = new EventEmitter<
    Omit<
      { title: string; description?: string; tags: Tag[] },
      'id' | 'createdAt'
    >
  >();

  form: FormGroup;

  tags: Tag[] = [];
  allTags: Tag[] = [];

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: [''],
      tags: [[]],
    });
    this.taskService.getAllTags().subscribe((tags) => (this.allTags = tags));
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.submit.emit(this.form.value);
    this.form.reset({ title: '', description: '', tags: [] });
  }
}
