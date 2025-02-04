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
    this.userName = "Votre userName";
    this.userName == "" ? this.emptyUserName = true : this.emptyUserName = false;
  }
  

  resetInput():void {
    this.userName = "";
  }
}
