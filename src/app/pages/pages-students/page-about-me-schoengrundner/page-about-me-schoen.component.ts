import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SCHOENGRUNDNER, Person} from '../../../model/person';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-page-about-me-schoen',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe
  ],
  templateUrl: './page-about-me-schoen.component.html',
  standalone: true,
  styleUrl: './page-about-me-schoen.component.scss'
})
export class PageAboutMeSCHOENComponent {
  me_schoen: Person = SCHOENGRUNDNER;
  protected readonly me = SCHOENGRUNDNER;
  protected readonly formatDate = formatDate;
}
