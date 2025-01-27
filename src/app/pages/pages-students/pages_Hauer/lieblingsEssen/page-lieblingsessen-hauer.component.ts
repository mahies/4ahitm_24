import { Component } from '@angular/core';
import {Person, HAUER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-about-me-hauer',
  templateUrl: './page-about-me-hauer.component.html',
  styleUrl: './page-lieblingsessen-hauer.component.scss',
  standalone: true
})
export class PageLieblingsessenHauerComponent {
 // me_hauer: Person = HAUER;
 me_hauer: Person = HAUER;
}
