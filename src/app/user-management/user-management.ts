import { Component } from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user-management',
  imports: [],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement {

  users: User[] = [
    {id:1, name:'Kiss András', email:'ka@mail.com', age:21},
    {id:2, name:'Kiss József', email:'kj@mail.com', age:22},
    {id:3, name:'Kiss Anna', email:'kaa@mail.com', age:30},
  ];

  newUser: User = {id:0, name: '',email:'', age:0};
  editingUser: User | null = null;

  addUser(){
    if(this.newUser.name && this.newUser.email && this.newUser.age){
      this.newUser.id = this.users.length + 1;
      this.users.push(this.newUser);
      this.newUser = {id:0, name: '',email:'', age:0};
    }
  }

  editUser(user: User){
    this.editingUser = user;
  }

  updateUser(){
    if(this.editingUser){
      const index =
        this.users.findIndex(u => u.id === this.editingUser!.id);
      if(index !== -1){
        this.users[index] = this.editingUser
      }
      this.editingUser = null;
    }
  }



}
