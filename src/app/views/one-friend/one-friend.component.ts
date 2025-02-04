import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [NgStyle],
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
  unAmiStatus: string = "";

  constructor(){
    Math.random() > 0.5 ? this.unAmiStatus = "ON" : this.unAmiStatus = "OFF" ;
  }

  getOneFriendStatus (): string {
    return `${this.oneFriendStatus}`;
  }

  getColor(): string{
    if (this.unAmiStatus == "ON"){
      return "green";
    }else {
      return "red";
    }
  }
}
