import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  // templateUrl: './footer.component.html',
  template:`
      <footer class="bg-dark text-white text-center py-3 container-100 row">
        <p>&copy; {{currentYear}} Cours Angular</p>
      </footer>
    `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
