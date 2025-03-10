import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header-hauer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-hauer.component.html',
  styleUrls: ['./header-hauer.component.scss']
})
export class HeaderHauerComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
