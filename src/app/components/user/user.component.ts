import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// we can create User type
// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

//we can also interface for User
// interface User {
//   id: string,
//   avatar: string,
//   name: string
// }
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
// below userComponent class is functionality of changing user on frontend
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   // users = DUMMY_USERS

//   imagePath = computed(()=> 'assets/users/'+this.selectedUser().avatar)

//   // get imagePath(){ // get methods are used in html as property not behave like a method
//   //   return 'assets/users/'+this.selectedUser().avatar;
//   // } // THIS METHOD IS FOR STATE MANAGING OF TRADITIONAL WAY

//   onSeletedUser() {
//     // in this method we are changing the selectedUser value and we can see user changed on UI, this is all done by zone.js
//     // that automatically detect the change in angular app
//     // zone.js is change detection mechanism
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//   this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

// below class is for making this user component a seperate for diffrernt user
export class UserComponent{
  
  // below both @Input() decorators are coming from outside i-e appComponent
//  @Input({required: true}) avatar!: string;
//  @Input({required: true}) name!: string;
//  @Input({required: true}) id!: string
// instead of creating 3 @input we can create an object
 @Input({required:true}) user!: User
 @Input({required: true}) isSelected!: boolean
 @Output() select = new EventEmitter<string>() // output is used to emit the value from current compnent

///-----------using input signals-------------------
//below both are input signals
// input signals are readonly
//  avatar = input.required<string>()
//  name = input.required<string>()
//  imagePath = computed(()=> 'assets/users/'+ this.avatar())
 ///-------------------------------------------

 //-----------------using output emitter insted of @Output--------------
//  select = output<string>();
 //------------------------------------------------

 get imagePath(){
  return 'assets/users/'+ this.user.avatar;
 }

 onSeletedUser(){
  this.select.emit(this.user.id); // this line in emitting the id to appComponent's onSelectUser method
 }
}
