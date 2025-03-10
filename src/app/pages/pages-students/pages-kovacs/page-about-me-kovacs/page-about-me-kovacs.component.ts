import {KOVACS} from '../../../../model/person';
// @ts-ignore
import { Component } from "@angular/core";
import {HeaderKovacsComponent} from '../header-kovacs/header-kovacs.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';



@Component({
  selector: 'app-page-about-me-kovacs',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe,
    HeaderKovacsComponent
  ],
  templateUrl: './page-about-me-kovacs.component.html',
  styleUrl: './page-about-me-kovacs.component.scss'
})
export class PageAboutMeKOVACSComponent {

  protected readonly me = KOVACS;
}
