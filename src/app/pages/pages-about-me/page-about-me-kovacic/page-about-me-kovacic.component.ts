import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {KOVACIC, Person} from '../../../model/person';



@Component({
  selector: 'app-page-about-me-kovacic',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-kovacic.component.html',
  standalone: true,
  styleUrl: './page-about-me-kovacic.component.scss'
})
export class PageAboutMeKOVACICComponent {
  me_kovacic: Person = KOVACIC;
  protected readonly me = KOVACIC;
}
