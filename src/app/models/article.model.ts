// Interface pour typer les articles
export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}