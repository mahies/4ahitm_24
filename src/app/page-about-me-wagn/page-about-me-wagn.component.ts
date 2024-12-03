import { Component } from '@angular/core';
import {Carina, MINNIE, Person} from '../model/person';

@Component({
  selector: 'app-page-about-me-wagn',
  imports: [],
  templateUrl: './page-about-me-wagn.component.html',
  styleUrl: './page-about-me-wagn.component.scss'
})
export class PageAboutMeWAGNComponent {
  me: Person = Carina; //Variable me vom Typ Person = KONSTANTE MOUSE
}


