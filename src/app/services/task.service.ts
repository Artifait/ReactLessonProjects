import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task';
import { Tag } from '../models/tag';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks$ = new BehaviorSubject<Task[]>([]);
  private tags$ = new BehaviorSubject<Tag[]>([]);

  constructor() {
    const initialTags: Tag[] = [
      { id: 'work', name: 'Работа' },
      { id: 'hobby', name: 'Хобби' },
    ];
    this.tags$.next(initialTags);
  }

  getAllTasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  getTaskById(id: string): Observable<Task | undefined> {
    return this.tasks$.pipe(map((tasks) => tasks.find((t) => t.id === id)));
  }

  createTask(data: Omit<Task, 'id' | 'createdAt'>): void {
    const newTask: Task = {
      ...data,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date(),
    };
    this.registerTags(newTask.tags);
    this.tasks$.next([...this.tasks$.value, newTask]);
  }

  updateTask(
    id: string,
    updates: Partial<Omit<Task, 'id' | 'createdAt'>>
  ): void {
    const tasks = this.tasks$.value.map((t) => {
      if (t.id === id) {
        const updated = { ...t, ...updates } as Task;
        if (updates.tags) {
          this.registerTags(
            updates.tags.filter((tag) => !t.tags.some((et) => et.id === tag.id))
          );
        }
        return updated;
      }
      return t;
    });
    this.tasks$.next(tasks);
    this.rebuildTags();
  }

  deleteTask(id: string): void {
    const filtered = this.tasks$.value.filter((t) => t.id !== id);
    this.tasks$.next(filtered);
    this.rebuildTags();
  }

  getAllTags(): Observable<Tag[]> {
    return this.tags$.asObservable();
  }

  registerTags(tags: Tag[]): void {
    const existing = this.tags$.value;
    const toRegister = tags.filter(
      (t) => !existing.some((et) => et.id === t.id)
    );
    if (toRegister.length) {
      this.tags$.next([...existing, ...toRegister]);
    }
  }

  rebuildTags(): void {
    const usedTagIds = new Set(
      this.tasks$.value.flatMap((t) => t.tags.map((tag) => tag.id))
    );
    const filteredTags = this.tags$.value.filter((tag) =>
      usedTagIds.has(tag.id)
    );
    this.tags$.next(filteredTags);
  }

  /**
   * Ищет задачи по текстовому запросу и/или по массиву ID тегов
   * @param query текст для поиска в заголовке/описании
   * @param tagIds список ID тегов для фильтрации
   */
  searchTasks(query: string = '', tagIds: string[] = []): Observable<Task[]> {
    return this.tasks$.pipe(
      map((tasks) =>
        tasks.filter((t) => {
          const matchesText = query
            ? [t.title, t.description ?? ''].some((field) =>
                field.toLowerCase().includes(query.toLowerCase())
              )
            : true;
          const matchesTags = tagIds.length
            ? tagIds.every((id) => t.tags.some((tag) => tag.id === id))
            : true;
          return matchesText && matchesTags;
        })
      )
    );
  }
}
