import { Component } from '@angular/core';
import {htl} from '../htl';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MUTISEVIC} from '../../../../model/person';
import {PageHeaderMutisevicComponent} from '../page-header-mutisevic/page-header-mutisevic.component';
import {PageFooterMutisevicComponent} from '../page-footer-mutisevic/page-footer-mutisevic.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-page-about-me-mutisevic',
  imports: [RouterLink, RouterLinkActive, PageHeaderMutisevicComponent, PageFooterMutisevicComponent, DatePipe],
  templateUrl: './page-about-me-mutisevic.component.html',
  standalone: true,
  styleUrl: './page-about-me-mutisevic.component.scss'
})
export class PageAboutMeMutisevicComponent {

  protected readonly me = MUTISEVIC;

}
