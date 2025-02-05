import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info-editor',
  imports: [FormsModule],
  templateUrl: './user-info-editor.component.html',
  styleUrl: './user-info-editor.component.css'
})
export class UserInfoEditorComponent {
  newName: string = "";
  newInfo: string = "";
  data: {name:String; info:String} = {
    name:this.newName,
    info:this.newInfo
  };

  @Output() infoUpdated = new EventEmitter<{name: string, info: string}>();

  updateInfo(){
    this.infoUpdated.emit({name:this.newName, info:this.newInfo});
    this.newName = "";
    this.newInfo = "";
  }
}
