import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [NgStyle, NgClass],
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
  oneFriendImg: string = 'https://picsum.photos/id/237/200/300';
  oneFrienStyle: string = "";
  

  constructor(){
    // Math.random() > 0.5 ? this.unAmiStatus = "ON" : this.unAmiStatus = "OFF" ;
    this.oneFrienStyle = Math.random() > 0.5 ? "ON" : "OFF" ;
  }

  getOneFriendStatus (): string {
    return `${this.oneFriendStatus}`;
  }

  getColor(): string{
    return this.oneFrienStyle === "ON" ? 'green' : 'red';
  }
}
