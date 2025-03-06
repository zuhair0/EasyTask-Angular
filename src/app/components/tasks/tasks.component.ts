import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskModel } from './task/task.model';
import { TaskService } from './task.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingNewTask = false

  // ------dependancy injection of service-----
  constructor(private taskservice: TaskService){}
  // ------------------------------------------

  // private taskservice = new TaskService();// creating the new instance of taskService
  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary:
  //       'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31',
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary:
  //       'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ];
  get selectedUserTasks(){
    return this.taskservice.getUserTask(this.userId);
  }
  ontaskComplete(taskId: string){
    this.taskservice.removeTask(taskId)
  }
  onStartAddTask(){
    this.isAddingNewTask = true
  }
  cancellingNewTaskCreation(){
    this.isAddingNewTask = false
  }

  // we dont need this method as we are using the service now
  // onAddTask(newTask: newTaskModel){
  //   // this.tasks.unshift({
  //   //   id: new Date().getHours().toString(),
  //   //   userId: this.userId,
  //   //   title: newTask.title,
  //   //   summary: newTask.summary,
  //   //   dueDate: newTask.dueDate
  //   // })
  //   this.taskservice.addTask(newTask, this.userId)
  //   this.isAddingNewTask=false
  // }
}
