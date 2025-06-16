import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-tag-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.scss'],
})
export class TagSelectorComponent implements OnInit {
  @Input() selectedTags: Tag[] = [];
  @Output() selectedChange = new EventEmitter<Tag[]>();

  form!: FormGroup;
  allTags: Tag[] = [];
  showMenu = false;

  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit() {
    this.form = this.fb.group({
      selection: [this.selectedTags.map((t) => t.id)],
      newTag: [''],
    });
    this.taskService.getAllTags().subscribe((tags) => (this.allTags = tags));
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onSelectionChange() {
    const ids: string[] = this.form.value.selection;
    const tags = this.allTags.filter((t) => ids.includes(t.id));
    this.selectedChange.emit(tags);
  }

  onAddNew() {
    const name: string = this.form.value.newTag.trim();
    if (!name) return;
    const id = name.toLowerCase().replace(/\s+/g, '-');
    const tag: Tag = { id, name };
    this.taskService.registerTags([tag]);
    this.form.patchValue({ newTag: '' });
  }

  onApply() {
    this.onSelectionChange();
    this.toggleMenu();
  }

  isSelected(tag: Tag): boolean {
    return (this.form.value.selection as string[]).includes(tag.id);
  }

  onCheckboxChange(event: Event, tag: Tag) {
    const checked = (event.target as HTMLInputElement).checked;
    const selection: string[] = [...this.form.value.selection];
    if (checked) {
      if (!selection.includes(tag.id)) selection.push(tag.id);
    } else {
      const idx = selection.indexOf(tag.id);
      if (idx > -1) selection.splice(idx, 1);
    }
    this.form.patchValue({ selection });
  }
}
