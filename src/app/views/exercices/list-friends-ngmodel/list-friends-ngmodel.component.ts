import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-friends-ngmodel',
  imports: [FormsModule, OneFriendComponent],
  templateUrl: './list-friends-ngmodel.component.html',
  styleUrl: './list-friends-ngmodel.component.css'
})
export class ListFriendsNgmodelComponent {
  listFriendsAuth: boolean = false;
  listFriendsCreationStatus: string = "";
  listFriendsTextInput: string = "Hello";

  constructor(){
    setTimeout(()=>{this.listFriendsAuth = true},3000);
  }

  onAddingFriends(): void {this.listFriendsCreationStatus = "votre ami a été ajouté";}
  onUpdateFriendsList(eventInput:Event): void {
    console.log(eventInput);
    // this.listFriendsTextInput = (<HTMLInputElement>eventInput.target).value;
  }
}
