import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {POJAR, Person} from '../../../../model/person';

import {PageFooterPojarComponent} from '../page-footer-pojar/page-footer-pojar.component-Gaming';

import {PageHeaderPojarComponent} from '../page-header-pojar/page-header-pojar.component-Gaming';

@Component({
  selector: 'app-page-about-me-pojar',
  imports: [
    RouterLink,
    RouterLinkActive,
    PageFooterPojarComponent,
    PageHeaderPojarComponent

  ],
  templateUrl: './page-about-me-pojar.component.html',
  styleUrl: './page-about-me-pojar.component.scss'
})
export class PageAboutMePojarComponent {

  me: Person = POJAR; //Variable me vom Typ Person = KONSTANTE MOUSE
}



