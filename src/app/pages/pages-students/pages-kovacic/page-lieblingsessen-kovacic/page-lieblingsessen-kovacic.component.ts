import { Component } from '@angular/core';
import {KOVACIC} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {carti} from '../../pages-mutisevic/carti';
import {gericht} from '../gericht';
import {HeaderKovacicComponent} from "../header-kovacic/header-kovacic.component";
import {FooterKovacicComponent} from '../footer-kovacic/footer-kovacic.component';

@Component({
  selector: 'app-page-lieblingsessen-kovacic',
  imports: [RouterLink,
    RouterLinkActive, HeaderKovacicComponent, FooterKovacicComponent],
  templateUrl: './page-lieblingsessen-kovacic.component.html',
  standalone: true,
  styleUrl: './page-lieblingsessen-kovacic.component.scss'
})
export class PageLieblingsessenKovacicComponent {
  protected readonly me = gericht;
}
