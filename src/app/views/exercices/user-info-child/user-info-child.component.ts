import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-child',
  imports: [],
  templateUrl: './user-info-child.component.html',
  styleUrl: './user-info-child.component.css'
})
export class UserInfoChildComponent {
    @Input() name!: string;
    @Input() info!: string;
  
}
