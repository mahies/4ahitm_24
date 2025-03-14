import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {WAGNER} from '../../../../model/person';


@Component({
  selector: 'app-page-haustiere-wagner',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './page-haustiere-wagner.component.html',
  styleUrl: './page-haustiere-wagner.component.scss'
})
export class PageHaustiereWAGNERComponent {

  protected readonly me = WAGNER;
}
