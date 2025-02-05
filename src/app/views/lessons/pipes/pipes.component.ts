import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
@Pipe({
  name: 'redText'
})
export class RedTextPipe implements PipeTransform {
  transform(value: string): string {
    return `<span class="text-danger">${value}</span>`;
  }
}

@Pipe({
  name:'underlineText'
})
export class UnderLineTextPipe implements PipeTransform{
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<span style="text-decoration: underline;">${value}</span>`
    );
  }
}

@Pipe({
  name:'coolJeff'
})
export class CoolJeff implements PipeTransform{
  transform(value: string):string {
    return `${value} (Au fait Jeff est trop Cool)`
  }
}

@Component({
  selector: 'app-pipes',
  imports: [FormsModule, CommonModule, RedTextPipe,UnderLineTextPipe,CoolJeff],
  template:`
  <div class="container mt-5">
  <h1 class="text-center text-primary">Leçon : Les Pipes en Angular</h1>
  <p class="text-muted">Les pipes permettent de transformer les données dans les templates Angular de manière simple et réutilisable.</p>

  <!-- Section : Pipes intégrés -->
  <section class="mb-4">
    <h3 class="text-success">1. Les Pipes intégrés</h3>
    <p>Voici quelques exemples des pipes intégrés les plus courants :</p>
    <ul class="list-group">
      <li class="list-group-item">
        <strong>Date :</strong> {{ currentDate | date:'fullDate' }}
        <span class="badge bg-secondary">Exemple : {{ currentDate }}</span>
      </li>
      <li class="list-group-item">
        <strong>Uppercase :</strong> {{ exampleText | uppercase }}
        <span class="badge bg-secondary">Exemple : {{ exampleText }}</span>
      </li>
      <li class="list-group-item">
        <strong>Currency :</strong> {{ productPrice | currency:'EUR':'symbol' }}
        <span class="badge bg-secondary">Exemple : {{ productPrice }}</span>
      </li>
      <li class="list-group-item">
        <strong>Decimal :</strong> {{ decimalValue | number:'1.2-2' }}
        <span class="badge bg-secondary">Exemple : {{ decimalValue }}</span>
      </li>
      <li class="list-group-item">
        <strong>JSON :</strong>
        <pre>{{ jsonData | json }}</pre>
      </li>
      <li class="list-group-item">
        <strong>Custom Pipe (RedText):</strong>
        <span [innerHTML]="exampleText | redText"></span>
        <span class="badge bg-secondary">Exemple : {{ exampleText }}</span>
      </li>

      <li class="list-group-item">
        <strong>Texte souligné :</strong>
        <span [innerHTML]="exampleText | underlineText"></span>
        <span class="badge bg-secondary">Exemple : {{ exampleText }}</span>
      </li>

      <li class="list-group-item">
      <strong>Texte avec Jeff :</strong>
      {{ testText | coolJeff }}
      <span class="badge bg-secondary">Exemple : {{ exampleText }}</span>
    </li>
    </ul>
  </section>`,

  styles:[`
      .container {
      max-width: 800px;
    }
    .badge {
      float: right;
    }`]
})
export class PipesComponent {
  currentDate: Date = new Date();
  exampleText: string = 'Angular Pipes';
  testText: string = 'Salut les Pipes';
  productPrice: number = 1234.56;
  decimalValue: number = 42.56789;
  jsonData = { name: 'Angular', version: 19 };
  interactiveText: string = 'Hello, Angular!';
}
