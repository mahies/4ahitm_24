import { Component } from '@angular/core';
import {KOVACIC} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {carti} from '../../pages-mutisevic/carti';
import {gericht} from '../gericht';

@Component({
  selector: 'app-page-lieblingsessen-kovacic',
  imports: [RouterLink,
    RouterLinkActive],
  templateUrl: './page-lieblingsessen-kovacic.component.html',
  standalone: true,
  styleUrl: './page-lieblingsessen-kovacic.component.scss'
})
export class PageLieblingsessenKovacicComponent {
  protected readonly me = gericht;
}
