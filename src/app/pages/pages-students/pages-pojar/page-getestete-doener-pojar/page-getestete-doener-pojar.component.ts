import { Component } from '@angular/core';

import {PageFooterPojarComponent} from "../page-footer-pojar/page-footer-pojar.component-Gaming";
import {PageHeaderPojarComponent} from '../page-header-pojar/page-header-pojar.component-Gaming';


@Component({
  selector: 'app-page-getestete-doener-pojar',
  imports: [
    PageFooterPojarComponent,
    PageHeaderPojarComponent
  ],
  templateUrl: './page-getestete-doener-pojar.component.html',
  styleUrl: './page-getestete-doener-pojar.component.scss'
})
export class PageGetesteteDoenerPojarComponent {

}
