import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';
import {HeaderKovacsComponent} from '../header-kovacs/header-kovacs.component';
import {FooterKovacsComponent} from '../footer-kovacs/footer-kovacs.component';

@Component({
  selector: 'app-page-page-lieblingsessen-pojar-kovacs',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe,
    HeaderKovacsComponent,
    FooterKovacsComponent
  ],
  templateUrl: './page-lieblingsessen-kovacs.component.html',
  styleUrl: './page-lieblingsessen-kovacs.component.scss'
})
export class PageLieblingsessenKovacsComponent {

}
