import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

// Interface pour typer les articles
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-user-control-center-add-article',
  imports: [FormsModule],
  templateUrl: './user-control-center-add-article.component.html',
  styleUrl: './user-control-center-add-article.component.css'
})
export class UserControlCenterAddArticleComponent {
  newAuthor: string = "";
  newTitle: string = "";
  newContent: string = "";
  newArticle: Article = {
    id: 0,
    title: this.newTitle,
    content: this.newContent,
    author: this.newAuthor,
    date: new Date(Date.now()), 
    type: 'article'
  }
  newBrouillon: Article = {
    id: 0,
    title: this.newTitle,
    content: this.newContent,
    author: this.newAuthor,
    date: new Date(Date.now()), 
    type: 'brouillon'
  }
  @Output() articleCreated = new EventEmitter<Article>();
  @Output() brouillonCreated = new EventEmitter<Article>();

  addArticle() {
    this.newArticle.author = this.newAuthor;
    this.newArticle.title = this.newTitle;
    this.newArticle.content = this.newContent;
    this.articleCreated.emit(this.newArticle);
    this.newAuthor = "";
    this.newTitle = "";
    this.newContent = "";
  }
  addBrouillon() {
    this.newArticle.author = this.newAuthor;
    this.newBrouillon.title = this.newTitle;
    this.newBrouillon.content = this.newContent;
    this.brouillonCreated.emit(this.newBrouillon);
    this.newAuthor = "";
    this.newTitle = "";
    this.newContent = "";
  }
}
