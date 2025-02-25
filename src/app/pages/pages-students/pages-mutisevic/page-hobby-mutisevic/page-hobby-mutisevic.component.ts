import { Component } from '@angular/core';
import {cr7} from '../cr7';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MUTISEVIC} from '../../../../model/person';
import {carti} from '../carti';
import {PageHeaderMutisevicComponent} from '../page-header-mutisevic/page-header-mutisevic.component';

@Component({
    selector: 'app-page-hobby-mutisevic',
    templateUrl: './page-hobby-mutisevic.component.html',
    standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    PageHeaderMutisevicComponent
  ],
    styleUrl: './page-hobby-mutisevic.component.scss'
})
export class PageHobbyMutisevicComponent {
  protected readonly me = cr7;
}
