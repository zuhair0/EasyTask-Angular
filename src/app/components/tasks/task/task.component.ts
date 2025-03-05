import { Component,Input } from '@angular/core';
import { taskObject } from './task.model';
// interface taskObject  {
// id :string;
// userId: string;
// title: string;
// summary: string;
// dueDate: string;
// }
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
// @Input() taskId!: string;
// @Input() userId!: string;
// @Input() title!: string;
// @Input() summary!: string;
// @Input() dueDate!: string;
@Input({required:true}) tasksdata!: taskObject

}
