import { Component } from '@angular/core';
import {GARCIA, Person} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SZA} from '../sza_info';
import {PageHeaderGarciaComponent} from "../page-header-garcia/page-header-garcia.component";

@Component({
  selector: 'app-page-lieblingssaengerin-garcia',
    imports: [
        RouterLink,
        RouterLinkActive,
        PageHeaderGarciaComponent
    ],
  templateUrl: './page-lieblingssaengerin-garcia.component.html',
  standalone: true,
  styleUrl: './page-lieblingssaengerin-garcia.component.scss'
})
export class PageLieblingssaengerinGARCIAComponent {
  protected readonly me = SZA;
}


