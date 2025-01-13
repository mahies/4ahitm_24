import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MINNIE, PONT} from '../../../model/person';

@Component({
  selector: 'app-page-about-me-garcia',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-garcia.component.html',
  standalone: true,
  styleUrl: './page-about-me-garcia.component.scss'
})
export class PageAboutMeGARCIAComponent{

  protected readonly me = MINNIE;
}
