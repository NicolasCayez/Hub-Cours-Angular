import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends-event-binding',
  imports: [OneFriendComponent],
  templateUrl: './list-friends-event-binding.component.html',
  styleUrl: './list-friends-event-binding.component.css'
})
export class ListFriendsEventBindingComponent {
  listFriendsAuth: boolean = false;
  listFriendsCreationStatus: string = "";
  listFriendsTextInput: string = "";

  constructor(){
    setTimeout(()=>{this.listFriendsAuth = true},3000);
  }

  onAddingFriends(): void {this.listFriendsCreationStatus = "votre ami a été ajouté";}
  onUpdateFriendsList(eventInput:Event): void {this.listFriendsTextInput = (<HTMLInputElement>eventInput.target).value;}
}
