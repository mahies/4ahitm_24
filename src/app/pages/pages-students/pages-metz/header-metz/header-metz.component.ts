import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-metz',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-metz.component.html',
  styleUrl: './header-metz.component.scss'
})
export class HeaderMetzComponent {

}
