import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {PONT, Person} from '../../../model/person';

@Component({
  selector: 'app-page-about-me-pont',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-pont.component.html',
  styleUrl: './page-about-me-pont.component.scss'
})
export class PageAboutMePONTComponent {
  me:Person = PONT;
}
