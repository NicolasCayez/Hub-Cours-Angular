import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  userName: string = "test";
  emptyUserName: boolean = true;

  constructor(){
    this.userName = "";
  }
  

  resetInput():void {
    this.userName = "";
  }

  onUpdate(eventInput:Event): void {
    this.userName == "" ? this.emptyUserName = true : this.emptyUserName = false;
  }
}
