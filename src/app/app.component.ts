import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';

@Component({
  selector: 'app-root',
  imports: [TaskContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-manager';
}
