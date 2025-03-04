import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input({required:true}) name!: string
}
