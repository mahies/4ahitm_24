import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {RADDA, Person} from '../../../model/person';

@Component({
  selector: 'app-mainpage-radda',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './mainpage-radda.component.html',
  standalone: true,
  styleUrl: './mainpage-radda.component.scss'
})
export class PageAboutMeRADDAComponent {
  me_radda: Person = RADDA;
  protected readonly me = RADDA;
}
