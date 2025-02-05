import { Component, Input } from '@angular/core';
import { Article } from '../../../models/article.model';

// Interface pour typer les articles
// interface Article {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   date: Date;
//   type: string;
// }

@Component({
  selector: 'app-user-control-center-child',
  imports: [],
  templateUrl: './user-control-center-child.component.html',
  styleUrl: './user-control-center-child.component.css'
})
export class UserControlCenterChildComponent {
  @Input() article!: Article;

}
