import { Component } from '@angular/core';
import { UserInfoChildComponent } from "../user-info-child/user-info-child.component";
import { UserInfoEditorComponent } from "../user-info-editor/user-info-editor.component";

@Component({
  selector: 'app-user-info-parent',
  imports: [UserInfoChildComponent, UserInfoEditorComponent],
  templateUrl: './user-info-parent.component.html',
  styleUrl: './user-info-parent.component.css'
})
export class UserInfoParentComponent {
  name: string = "Brigitte";
  info: string = "Comptablme";

  onInfoUpdated(data:{name:string;info:string}) {
    this.name = data.name;
    this.info = data.info;
  }
}
