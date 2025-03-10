import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderCizComponent} from '../header-ciz/header-ciz.component';
import {FooterCizComponent} from '../footer-ciz/footer-ciz.component';

@Component({
  selector: 'app-page-games-ciz',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderCizComponent,
    FooterCizComponent
  ],
  templateUrl: './page-games-ciz.component.html',
  styleUrl: './page-games-ciz.component.scss'
})
export class PageGamesCizComponent {

}
