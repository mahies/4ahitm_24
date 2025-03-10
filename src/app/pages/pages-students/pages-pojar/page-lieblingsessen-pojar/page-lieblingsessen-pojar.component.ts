import { Component } from '@angular/core';
import {POJAR} from '../../../../model/person';

import {PageHeaderPojarComponent} from '../page-header-pojar/page-header-pojar.component-Gaming';

import {PageFooterPojarComponent} from '../page-footer-pojar/page-footer-pojar.component-Gaming';

@Component({
  selector: 'app-page-lieblingsessen-pojar',
  imports: [
    PageHeaderPojarComponent,
    PageFooterPojarComponent
  ],
  templateUrl: './page-lieblingsessen-pojar.component.html',
  styleUrl: './page-lieblingsessen-pojar.component.scss'
})
export class PageLieblingsessenPojarComponent {

  protected readonly me = POJAR;
}
