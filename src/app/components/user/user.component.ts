import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { CommonModule } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  users = DUMMY_USERS

  get imagePath(){ // get methods are used in html as property not behave like a method
    return 'assets/users/'+this.selectedUser.avatar;
  }
}
