import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ReiseGar} from '../ReiseGar';
import {SZA} from '../sza_info';

@Component({
  selector: 'app-page-meine-reisen-garcia',
  imports: [
    RouterLink,
    RouterLinkActive],
  templateUrl: './page-meine-reisen-garcia.component.html',
  standalone: true,
  styleUrl: './page-meine-reisen-garcia.component.scss'
})
export class PageMeineReisenGARCIAComponent {
  protected readonly me = ReiseGar;
}
