import { Component } from '@angular/core';
import {MORITZ, Person} from '../../../../model/person';
import {DatePipe} from '@angular/common';
import {HeaderMetzComponent} from '../header-metz/header-metz.component';
import {FooterMetzComponent} from "../footer-metz/footer-metz.component";

@Component({
  selector: 'app-page-aboutme-metz',
    imports: [
        DatePipe,
        HeaderMetzComponent,
        FooterMetzComponent
    ],
  templateUrl: './page-aboutme-metz.component.html',
  styleUrl: './page-aboutme-metz.component.scss'
})
export class PageAboutmeMETZComponent {
    me: Person = MORITZ;
}
