import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EasyTask';
  users = DUMMY_USERS;
  userID!:String;

  get selectedUser(){
    return this.users.find((user)=>user.id===this.userID)!
  }
  onSelectUser(id:String){
    this.userID = id;
  }

}
