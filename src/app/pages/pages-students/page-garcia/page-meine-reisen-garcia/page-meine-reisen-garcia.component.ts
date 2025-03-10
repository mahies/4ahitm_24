import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ReiseGar} from '../ReiseGar';
import {SZA} from '../sza_info';
import {PageHeaderGarciaComponent} from "../page-header-garcia/page-header-garcia.component";
import {PageFooterGarciaComponent} from '../page-footer-garcia/page-footer-garcia.component';

@Component({
  selector: 'app-page-meine-reisen-garcia',
  imports: [
    RouterLink,
    RouterLinkActive,
    PageHeaderGarciaComponent,
    PageFooterGarciaComponent
  ],
  templateUrl: './page-meine-reisen-garcia.component.html',
  standalone: true,
  styleUrl: './page-meine-reisen-garcia.component.scss'
})
export class PageMeineReisenGARCIAComponent {
  protected readonly me = ReiseGar;
}
