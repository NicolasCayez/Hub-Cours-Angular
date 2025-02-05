import { Component, effect, signal, computed } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-signals',
  imports: [NgFor],
  template: `
    <div class="container mt-5">
      <h1 class="text-center text-primary">Comprendre les Signals en Angular</h1>
      <!-- Historique et Contexte -->
      <div class="alert alert-info mt-4">
        <h4>Qu'est-ce qu'un Signal ?</h4>
        <p>
          Les <strong>Signals</strong> sont une nouveauté introduite dans Angular, inspirée des concepts
          de réactivité présents dans d'autres frameworks modernes comme <strong>Svelte</strong> ou <strong>SolidJS</strong>.
          Leur but principal est d'offrir un modèle de gestion d'état réactif plus simple et plus performant
          que les approches traditionnelles basées sur les observables et les comportements d'abonnement (ex : <code>RxJS</code>).
        </p>
        <p>
          Contrairement à <code>BehaviorSubject</code> ou <code>Subject</code> (dans les observables), les Signals éliminent la nécessité
          de gérer manuellement les abonnements et désabonnements. Cela réduit les risques de fuites de mémoire
          et simplifie le code tout en offrant une syntaxe plus intuitive.
        </p>
        <p>
          Un Signal est une unité atomique d'état réactif : il représente une valeur qui peut changer dans le temps
          et déclenche automatiquement une mise à jour des parties de l'interface utilisateur qui en dépendent.
          Les <strong>computed signals</strong> permettent de dériver des valeurs sans redondance, tandis que les
          <strong>effects</strong> permettent d'exécuter des actions en réponse aux changements.
        </p>
        <p>
          <strong>Exemples d'utilisation :</strong>
          </p>
          <ul>
            <li>Un compteur réactif pour gérer des scores ou des incréments dynamiques.</li>
            <li>Des formulaires interactifs avec mise à jour automatique des champs calculés.</li>
            <li>Une application météo où les données se mettent à jour automatiquement en fonction de l'emplacement.</li>
          </ul>

        <p class="fst-italic">
          Note : Les Signals font partie d'un effort plus large d'Angular pour moderniser et simplifier son écosystème,
          en réduisant la complexité associée à RxJS dans de nombreux cas.
        </p>
      </div>

      <!-- Exemple 1 : Compteur simple -->
      <div class="card shadow p-4 mt-4">
        <h3 class="text-success">Exemple 1 : Compteur Réactif</h3>
        <p>
          Cet exemple montre comment utiliser un Signal pour gérer un compteur réactif. À chaque clic sur
          les boutons, le Signal <code>count</code> est mis à jour, et l'interface utilisateur est
          automatiquement mise à jour sans intervention supplémentaire.
        </p>
        <p class="fs-4">Valeur actuelle : <strong>{{ count() }}</strong></p>
        <p class="fs-4">
          Valeur multipliée (x{{ multiplier() }}) : <strong>{{ multipliedCount() }}</strong>
        </p>
        <div class="btn-group mt-3">
          <button class="btn btn-outline-primary" (click)="increment()">Incrémenter</button>
          <button class="btn btn-outline-danger" (click)="decrement()">Décrémenter</button>
          <button class="btn btn-warning" (click)="reset()">Réinitialiser</button>
        </div>
        <div class="mt-4">
          <label for="multiplier" class="form-label">Changer le multiplicateur :</label>
          <!--  $any(...) : pour dire à TypeScript d'ignorer le type de l'objet passé. Cela permet d'accéder à des propriétés qui ne sont pas explicitement définies dans le type de l'objet. Ici, cela permet d'accéder à la propriété value de l'élément d'entrée. -->
          <input
            id="multiplier"
            type="number"
            class="form-control w-25"
            [value]="multiplier()"
            (input)="changeMultiplier($any($event.target).value)"
          />
        </div>
        <p class="mt-3 fst-italic">
          Avec un <code>computed</code>, la valeur multipliée se met à jour automatiquement
          dès que le compteur ou le multiplicateur change.
        </p>
      </div>

      <!-- Exemple 2 : Historique des valeurs -->
      <div class="card shadow p-4 mt-4">
        <h3 class="text-primary">Exemple 2 : Historique des valeurs</h3>
        <p>
          Cet exemple montre comment utiliser un <code>Signal</code> pour stocker et gérer un historique des valeurs du compteur.
          L'historique est mis à jour automatiquement à chaque modification du compteur grâce à un effet (effect).
          Cela permet d'observer les changements dans le temps.
        </p>
        <div>
          <h5 class="text-secondary">Historique des 10 dernières valeurs :</h5>
          <ul>
            <li
              *ngFor="let val of countHistory(); let last = last"
              [class.text-success]="last"
            >
              {{ val }}
            </li>
          </ul>
        </div>
        <p class="fst-italic">
          Astuce : Le dernier élément de l'historique est mis en valeur pour une meilleure lisibilité.
        </p>
      </div>

      <!-- Exemple 3 : Conversion d'unités -->
      <div class="card shadow p-4 mt-4">
        <h3 class="text-info">Exemple 3 : Conversion d'unités</h3>
        <p>
          Les Signals sont également très utiles pour des calculs en temps réel. Ici, nous utilisons un Signal
          pour suivre une distance en kilomètres, et un <code>computed</code> pour convertir automatiquement
          cette distance en miles.
        </p>
        <p>Kilomètres :
          <input
            type="number"
            class="form-control d-inline w-25"
            [value]="distanceKm()"
            (input)="changeDistanceKm($any($event.target).value)"
          />
        </p>
        <p>Miles : <strong>{{ distanceMiles() }}</strong></p>
        <p class="fst-italic">
          Cette approche est idéale pour des applications comme les calculatrices, les outils de conversion ou
          les interfaces réactives nécessitant des calculs dépendants d'autres valeurs.
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./signals.component.css'],
})
export class SignalsComponent {
  // Exemple 1 : Compteur réactif
  count = signal(0);
  multiplier = signal(2);

  // Signal dérivé avec `computed`
  // ! computed est utilisé pour définir des valeurs qui dépendent d'autres signals ou d'autres données réactives.
  // ! Ces valeurs sont automatiquement recalculées uniquement lorsque les dépendances changent.
  // ! Objectif principal : Produire des valeurs dérivées de manière efficace.
  // ! Exemple d'usage : Calculer des données comme des totaux, des filtres, ou des transformations.

  multipliedCount = computed(() => this.count() * this.multiplier());

  // Exemple 2 : Historique des valeurs
  countHistory = signal<number[]>([]);

  // Exemple 3 : Conversion d'unités
  distanceKm = signal(1);
  distanceMiles = computed(() => this.distanceKm() * 0.621371);

  constructor() {
    // Effet pour observer les changements de `count` et mettre à jour l'historique
    // ! effect est utilisé pour exécuter des effets secondaires (comme des opérations qui ne produisent pas de valeur), en réponse à des changements de signals.
    // ! Les effets sont automatiquement déclenchés lorsqu'une ou plusieurs dépendances changent.
    // ! Objectif principal : Réagir aux modifications des données pour déclencher une action (ex. : mise à jour du DOM, appel d'API, logs).
    // ! Exemple d'usage : Synchroniser les données avec une API ou mettre à jour l'interface utilisateur.

    effect(() => {
      const currentCount = this.count();
      this.updateHistory(currentCount); // Met à jour l'historique
      console.log(
        `[Effet déclenché] Le compteur est maintenant ${currentCount}, ` +
        `valeur multipliée : ${this.multipliedCount()}. Historique : ${this.countHistory().join(', ')}`
      );
    });
  }

  // Méthodes pour gérer le compteur
  // Utilise SET pour mettre a jour la valeur
  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }

  changeMultiplier(value: any) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.multiplier.set(parsedValue);
    }
  }

  reset() {
    this.count.set(0);
    this.multiplier.set(2);
    this.countHistory.set([]);
  }

  // Méthode pour mettre à jour l'historique
  private updateHistory(value: number) {
    const history = this.countHistory();
    const maxHistoryLength = 10;
    if (history[history.length - 1] !== value) {
      const newHistory = [...history, value];
      if (newHistory.length > maxHistoryLength) {
        newHistory.shift(); // Supprime la première valeur si la limite est atteinte
      }
      this.countHistory.set(newHistory);
    }
  }

  // Méthodes pour la conversion d'unités
  changeDistanceKm(value: any) {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      this.distanceKm.set(parsedValue);
    }
  }
}