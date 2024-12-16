import { Component } from '@angular/core';
import {ADRIAN, MAJZEL, Person} from '../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';



@Component({
  selector: 'app-page-about-me-majzel',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-majzel.component.html',
  styleUrl: './page-about-me-majzel.component.scss'
})
export class PageAboutMeMajzelComponent {
  me_Majzel: Person = MAJZEL;
  protected readonly me = ADRIAN;
}
