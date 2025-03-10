import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-header-metz',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './header-metz.component.html',
  styleUrl: './header-metz.component.scss'
})
export class HeaderMetzComponent {

}
