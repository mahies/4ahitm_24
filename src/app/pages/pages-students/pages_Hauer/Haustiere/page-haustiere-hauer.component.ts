import { Component } from '@angular/core';
import {Person, HAUER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-haustiere-hauer',
  templateUrl: './page-haustiere-hauer.component.html',
  styleUrl: './page-haustiere-hauer.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class PageHaustiereHauerComponent {
 me_hauer: Person = HAUER;
}
