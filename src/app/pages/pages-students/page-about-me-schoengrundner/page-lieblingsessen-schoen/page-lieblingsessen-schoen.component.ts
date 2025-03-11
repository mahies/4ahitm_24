import { Component } from '@angular/core';
import {Person, SCHOENGRUNDNER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'page-lieblingsessen-schoen',
  templateUrl: './page-lieblingsessen-schoen.component.html',
  styleUrl: './page-lieblingsessen-schoen.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class PageLieblingsessenSchoenComponent {

  me_schoen: Person = SCHOENGRUNDNER;
  protected readonly me = SCHOENGRUNDNER;
}

