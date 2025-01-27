import { Component } from '@angular/core';
import {MAJZEL, Person} from '../../../../model/person';
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
  me: Person = MAJZEL;
}
