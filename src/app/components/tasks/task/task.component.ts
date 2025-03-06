import { Component,EventEmitter,inject,Input, Output } from '@angular/core';
import { taskObject } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';
// interface taskObject  {
// id :string;
// userId: string;
// title: string;
// summary: string;
// dueDate: string;
// }
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private taskService = inject(TaskService)
// @Input() taskId!: string;
// @Input() userId!: string;
// @Input() title!: string;
// @Input() summary!: string;
// @Input() dueDate!: string;;
@Input({required:true}) tasksdata!: taskObject
// @Output() complete = new EventEmitter<string>(); // we dont need this as we are using the service for it
taskCompleted(){
  // this.complete.emit(this.tasksdata.id);
  this.taskService.removeTask(this.tasksdata.id)
}


}
