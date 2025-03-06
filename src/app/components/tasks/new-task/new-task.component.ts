import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskModel } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string
  @Output() cancelDialog = new EventEmitter();
  // @Output() addTask = new EventEmitter<newTaskModel>(); // dont this anymore as we re now using the service
  // in two-way binidin it doesnt matter if we are using signals of normal property, [(ngModel)] automatically detects and bind the value
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');
  private taskService = inject(TaskService)

  cancellingNewTaskCreation() {
    this.cancelDialog.emit();
  }
  onSubmit() {
    // this.addTask.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   dueDate: this.enteredDueDate
    // })
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    },this.userId)
    this.cancelDialog.emit()
  }
}
