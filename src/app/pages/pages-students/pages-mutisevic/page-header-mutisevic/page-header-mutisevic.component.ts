import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {htl} from '../htl';
import {MUTISEVIC} from '../../../../model/person';

@Component({
  selector: 'app-page-header-mutisevic',
  imports: [RouterLink,
    RouterLinkActive],
  standalone: true,
  templateUrl: './page-header-mutisevic.component.html',
  styleUrl: './page-header-mutisevic.component.scss'
})
export class PageHeaderMutisevicComponent {

  protected readonly me = htl;
}
