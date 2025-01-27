import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {POJAR, Person, KOVACS} from '../../../model/person';

@Component({
  selector: 'app-page-about-me-pojar',
  imports: [
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './page-about-me-pojar.component.html',
  styleUrl: './page-about-me-pojar.component.scss'
})
export class PageAboutMePojarComponent {

  me: Person = POJAR; //Variable me vom Typ Person = KONSTANTE MOUSE
}



