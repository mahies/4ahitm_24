import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-kovacs',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-kovacs.component.html',
  styleUrl: './header-kovacs.component.scss'
})
export class HeaderKovacsComponent {

}
