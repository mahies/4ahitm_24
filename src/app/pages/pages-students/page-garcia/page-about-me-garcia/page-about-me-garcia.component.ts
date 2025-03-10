import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {GARCIA} from '../../../../model/person';
import {PageHeaderGarciaComponent} from '../page-header-garcia/page-header-garcia.component';
import {PageFooterGarciaComponent} from '../page-footer-garcia/page-footer-garcia.component';

@Component({
  selector: 'app-page-about-me-garcia',
  imports: [
    RouterLink,
    RouterLinkActive,
    PageHeaderGarciaComponent,
    PageFooterGarciaComponent
  ],
  templateUrl: './page-about-me-garcia.component.html',
  standalone: true,
  styleUrl: './page-about-me-garcia.component.scss'
})
export class PageAboutMeGARCIAComponent{

  protected readonly me = GARCIA;
}
