import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {GARCIA} from '../../../../model/person';
import {PageHeaderGarciaComponent} from "../page-header-garcia/page-header-garcia.component";
import {PageFooterGarciaComponent} from '../page-footer-garcia/page-footer-garcia.component';

@Component({
  selector: 'app-page-vacations-garcia',
  imports: [RouterLink,
    RouterLinkActive, PageHeaderGarciaComponent, PageFooterGarciaComponent],
  templateUrl: './page-vacations-garcia.component.html',
  standalone: true,
  styleUrl: './page-vacations-garcia.component.scss'
})
export class PageVacationsGarciaComponent {
  protected readonly me = GARCIA;
}
