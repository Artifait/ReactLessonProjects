import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { Tag } from '../../models/tag';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskCreateComponent } from '../task-create/task-create.component';

@Component({
  selector: 'app-task-container',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskCardComponent,
    TaskCreateComponent,
  ],
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent {
  tasks$: Observable<Task[]>;
  tags$: Observable<Tag[]>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getAllTasks();
    this.tags$ = this.taskService.getAllTags();
  }

  onCreateTask(data: Omit<Task, 'id' | 'createdAt'>) {
    this.taskService.createTask(data);
  }

  onEditTask(updated: Task) {
    this.taskService.updateTask(updated.id, {
      title: updated.title,
      description: updated.description,
      tags: updated.tags,
    });
  }

  onAddTag(task: Task, tag: Tag) {
    const newTags = [...task.tags, tag];
    this.taskService.updateTask(task.id, { tags: newTags });
  }

  onRemoveTag(task: Task, tag: Tag) {
    const filtered = task.tags.filter((t) => t.id !== tag.id);
    this.taskService.updateTask(task.id, { tags: filtered });
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
  }
}
