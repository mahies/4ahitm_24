import { Component } from '@angular/core';
import {MORITZ, Person} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';
import {HeaderMetzComponent} from '../header-metz/header-metz.component';

@Component({
  selector: 'app-page-aboutme-metz',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe,
    HeaderMetzComponent
  ],
  templateUrl: './page-aboutme-metz.component.html',
  styleUrl: './page-aboutme-metz.component.scss'
})
export class PageAboutmeMETZComponent {
    me: Person = MORITZ;
}
