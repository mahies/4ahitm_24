import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'footer-hauer',
  standalone: true,
  templateUrl: './footer-hauer.component.html',
  styleUrls: ['./footer-hauer.component.scss']
})
export class FooterHauerComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
