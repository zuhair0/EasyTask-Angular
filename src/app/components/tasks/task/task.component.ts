import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() taskId!: string;
@Input() userId!: string;
@Input() title!: string;
@Input() summary!: string;
@Input() dueDate!: string;

}
