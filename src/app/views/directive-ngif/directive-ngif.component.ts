import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-directive-ngif',
  imports: [NgIf, FormsModule, OneFriendComponent],
  templateUrl: './directive-ngif.component.html',
  styleUrl: './directive-ngif.component.css'
})
export class DirectiveNgifComponent {
  listFriendsAuth: boolean = false;
  listFriendsCreated: boolean = false;
  listFriendsCreationStatus: string = "";
  listFriendsTextInput: string = "Hello";

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
