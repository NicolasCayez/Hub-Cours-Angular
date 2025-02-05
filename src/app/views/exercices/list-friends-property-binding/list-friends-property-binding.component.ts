import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends-property-binding',
  imports: [OneFriendComponent],
  templateUrl: './list-friends-property-binding.component.html',
  styleUrl: './list-friends-property-binding.component.css'
})
export class ListFriendsPropertyBindingComponent {
  listFriendsAuth: boolean = false;

  constructor(){
    setTimeout(()=>{this.listFriendsAuth = true},3000);
  }
}
