import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelDialog = new EventEmitter()
  
  // in two-way binidin it doesnt matter if we are using signals of normal property, [(ngModel)] automatically detects and bind the value
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

cancellingNewTaskCreation(){
  this.cancelDialog.emit();
}
}
