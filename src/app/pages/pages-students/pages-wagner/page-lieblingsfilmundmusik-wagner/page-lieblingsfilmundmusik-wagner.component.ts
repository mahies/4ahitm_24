import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {WAGNER} from '../../../../model/person';

@Component({
  selector: 'app-page-lieblingsfilmundmusik-wagner',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-lieblingsfilmundmusik-wagner.component.html',
  styleUrl: './page-lieblingsfilmundmusik-wagner.component.scss'
})
export class PageLieblingsfilmundmusikWAGNERComponent {

  protected readonly me = WAGNER;
}
