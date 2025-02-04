import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <div class="card p-3 mb-3 bg-danger-subtle">
      <h5 class="text-primary">Child Component</h5>
      <p><strong>Message from Parent:</strong> {{ message }}</p>
      <p><strong>Counter Value:</strong> {{ counter }}</p>
      <button class="btn btn-info mt-2" (click)="notifyParent()">
        Notify Parent
      </button>
    </div>
  `,
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // !Déclarer propriété obligatoire (cela ne peut pas être undefined)
  @Input() message!: string;
  @Input() counter!: number;
  @Output() notify = new EventEmitter<string>();

  // !Déclarer propriété optionnelle avec ? (cela peut être undefined)
  // @Input() message?: string;
  // @Input() counter?: number;
  //! Déclarer propriété avec valeur par défaut (Faut être sûr que ca sera pas undefined)
  // @Input() message: string='';
  // @Input() counter: number=0;

  notifyParent() {
    this.notify.emit(`Counter is now from enfant: ${this.counter}`);
  }
}