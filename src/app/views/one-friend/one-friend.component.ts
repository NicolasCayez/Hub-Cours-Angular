import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId: number = 99;
  oneFriendName: string = 'Bill Boquet';
  oneFriendAge: number = 42;
  oneFriendStatus: string = 'Online';
  oneFriendBio: string = 'Champion du monde de Beach-Curling';
  oneFriendXss: string = "<script>alert('Hello, XSS')</script>";
  getOneFriendStatus (): string {
    return `${this.oneFriendStatus}`;
  }
}
