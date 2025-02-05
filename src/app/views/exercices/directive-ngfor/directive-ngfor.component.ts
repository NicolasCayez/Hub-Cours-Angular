import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OneFriendComponent } from '../one-friend/one-friend.component';

interface Friend {
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-directive-ngfor',
  imports: [NgIf, NgFor, FormsModule, OneFriendComponent],
  templateUrl: './directive-ngfor.component.html',
  styleUrl: './directive-ngfor.component.css'
})
export class DirectiveNgforComponent {
  listFriendsAuth: boolean = false;
  listFriendsCreated: boolean = false;
  listFriendsCreationStatus: string = "";
  listFriendsTextInput: string = "Hello";
  // myfriends: {name: string; age: number; email: string }[] = [
  //   { name: 'Alice', age: 30, email: 'alice@example.com' },
  //   { name: 'Bob', age: 25, email: 'bob@example.com' },
  //   { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  // ]
  myfriends: Friend[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ]

  constructor(){
    setTimeout(()=>{this.listFriendsAuth = true},3000);
  }

  onAddingFriends(): void {
    this.listFriendsCreationStatus = "votre ami a été ajouté";
    this.listFriendsCreated=!this.listFriendsCreated;
  }
  onUpdateFriendsList(eventInput:Event): void {
    console.log(eventInput);
    // this.listFriendsTextInput = (<HTMLInputElement>eventInput.target).value;

  }
}
