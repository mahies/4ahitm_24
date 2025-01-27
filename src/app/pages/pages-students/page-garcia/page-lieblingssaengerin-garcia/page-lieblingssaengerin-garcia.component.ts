import { Component } from '@angular/core';
import {GARCIA, Person} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SZA} from '../sza_info';

@Component({
  selector: 'app-page-lieblingssaengerin-garcia',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-lieblingssaengerin-garcia.component.html',
  standalone: true,
  styleUrl: './page-lieblingssaengerin-garcia.component.scss'
})
export class PageLieblingssaengerinGARCIAComponent {
  protected readonly me = SZA;
}


