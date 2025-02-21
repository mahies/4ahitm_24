import { Component } from '@angular/core';
import {Person, HAUER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-hobbies-hauer',
  templateUrl: './page-lieblingsessen-hauer.component.html',
  styleUrls: ['./page-lieblingsessen-hauer.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class PageLieblingsessenHauerComponent {
 me_hauer: Person = HAUER;
}
