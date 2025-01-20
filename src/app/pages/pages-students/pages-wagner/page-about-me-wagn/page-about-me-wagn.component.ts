import { Component } from '@angular/core';
import {WAGNER, Person} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-wagn',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-wagn.component.html',
  styleUrl: './page-about-me-wagn.component.scss'
})
export class PageAboutMeWAGNComponent {
  me: Person = WAGNER; //Variable me vom Typ Person = KONSTANTE MOUSE
}


