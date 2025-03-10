import { Component } from '@angular/core';
import {Person, HAUER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderHauerComponent} from '../header-Hauer/header-hauer.component';
import {FooterHauerComponent} from '../footer-Hauer/footer-hauer.component';

@Component({
  selector: 'app-page-haustiere-hauer',
  templateUrl: './page-haustiere-hauer.component.html',
  styleUrl: './page-haustiere-hauer.component.scss',
  imports: [
    HeaderHauerComponent,
    FooterHauerComponent
  ],
  standalone: true
})
export class PageHaustiereHauerComponent {
 me_hauer: Person = HAUER;
}
