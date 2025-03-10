import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-kovacic',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-kovacic.component.html',
  styleUrl: './header-kovacic.component.scss'
})
export class HeaderKovacicComponent {
  menuOpen: any;


  toggleMenu() {

  }
}
