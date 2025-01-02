import { Component } from '@angular/core';
import {MINNIE, MORITZ, Person} from '../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-aboutme-metz',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-aboutme-metz.component.html',
  styleUrl: './page-aboutme-metz.component.scss'
})
export class PageAboutmeMETZComponent {
    me: Person = MORITZ;
}
