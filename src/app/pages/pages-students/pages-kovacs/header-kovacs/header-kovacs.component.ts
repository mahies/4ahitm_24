import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-kovacs',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-kovacs.component.html',
  styleUrls: ['./header-kovacs.component.scss'] // Korrektur: "styleUrl" → "styleUrls"
})
export class HeaderKovacsComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
