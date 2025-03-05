import { Component,EventEmitter,Input, Output } from '@angular/core';
import { taskObject } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
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
// @Input() taskId!: string;
// @Input() userId!: string;
// @Input() title!: string;
// @Input() summary!: string;
// @Input() dueDate!: string;;
@Input({required:true}) tasksdata!: taskObject
@Output() complete = new EventEmitter<string>();
taskCompleted(){
  this.complete.emit(this.tasksdata.id);
}
}
