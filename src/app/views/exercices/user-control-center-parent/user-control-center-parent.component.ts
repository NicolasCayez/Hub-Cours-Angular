import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { UserControlCenterChildComponent } from "../user-control-center-child/user-control-center-child.component";
import { UserControlCenterAddArticleComponent } from '../user-control-center-add-article/user-control-center-add-article.component';
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
  selector: 'app-user-control-center',
  imports: [NgFor, UserControlCenterChildComponent, UserControlCenterAddArticleComponent],
  templateUrl: './user-control-center-parent.component.html',
  styleUrl: './user-control-center-parent.component.css'
})
export class UserControlCenterParentComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article'
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon'
    }
  ];

  // Gestion des articles ajoutés
  onArticleAdded(articleData: { title: string; content: string; author: string; date: Date; type: string }) {
    //Ici logique qui contruit un objet article et qui le rajoute au tableau 
    console.log(articleData);
    this.articles.push({
      id: this.articles[this.articles.length - 1].id + 1,
      title: articleData.title,
      content: articleData.content,
      author: articleData.author,
      date: articleData.date,
      type: articleData.type
    })
  }

  // Gestion des brouillons ajoutés
  onBrouillonAdded(brouillonData: { title: string; content: string; author: string; date: Date; type: string }) {
    //Ici logique qui contruit un objet brouillon et qui le rajoute au tableau
    console.log(brouillonData);
    this.articles.push({
      id: this.articles[this.articles.length - 1].id + 1,
      title: brouillonData.title,
      content: brouillonData.content,
      author: brouillonData.author,
      date: brouillonData.date,
      type: brouillonData.type
    })
  }
}
