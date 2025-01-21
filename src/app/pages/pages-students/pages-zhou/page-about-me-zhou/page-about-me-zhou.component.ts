import { Component } from '@angular/core';
import {ZHOU, Person} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-page-about-me-zhou',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './page-about-me-zhou.component.html',
  standalone: true,
  styleUrl: './page-about-me-zhou.component.scss'
})
export class PageAboutMeZHOUComponent {
  me : Person = ZHOU;

}
