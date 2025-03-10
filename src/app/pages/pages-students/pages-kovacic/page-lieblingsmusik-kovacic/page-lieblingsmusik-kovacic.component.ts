import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderKovacicComponent} from "../header-kovacic/header-kovacic.component";
import {FooterKovacicComponent} from '../footer-kovacic/footer-kovacic.component';

@Component({
  selector: 'app-page-lieblingsmusik-kovacic',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderKovacicComponent,
    FooterKovacicComponent
  ],
  templateUrl: './page-lieblingsmusik-kovacic.component.html',
  styleUrl: './page-lieblingsmusik-kovacic.component.scss'
})
export class PageLieblingsmusikKovacicComponent {

}
