import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {KOVACIC, KOVACS, Person} from '../../../../model/person';
import {HeaderKovacicComponent} from '../header-kovacic/header-kovacic.component';
import {FooterKovacicComponent} from '../footer-kovacic/footer-kovacic.component';



@Component({
  selector: 'app-page-about-me-kovacic',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderKovacicComponent,
    FooterKovacicComponent
  ],
  templateUrl: './page-about-me-kovacic.component.html',
  standalone: true,
  styleUrl: './page-about-me-kovacic.component.scss'
})
export class PageAboutMeKOVACICComponent {
  me_kovacic: Person = KOVACIC;
  protected readonly me = KOVACIC;
}
