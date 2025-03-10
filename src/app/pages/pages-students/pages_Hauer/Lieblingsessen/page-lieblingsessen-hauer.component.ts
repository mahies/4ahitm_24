import { Component } from '@angular/core';
import {Person, HAUER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderHauerComponent} from '../header-Hauer/header-hauer.component';
import {FooterHauerComponent} from '../footer-Hauer/footer-hauer.component';

@Component({
  selector: 'app-page-hobbies-hauer',
  templateUrl: './page-lieblingsessen-hauer.component.html',
  styleUrls: ['./page-lieblingsessen-hauer.component.scss'],
  imports: [
    HeaderHauerComponent,
    FooterHauerComponent
  ],
  standalone: true
})
export class PageLieblingsessenHauerComponent {
 me_hauer: Person = HAUER;
}
