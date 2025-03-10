import { Component } from '@angular/core';
import { Person, FRIEDL } from '../../../../../model/person';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderFriedlComponent } from '../../mainpages-friedl-header/mainpages-header-friedl.component';
import {FooterFriedlComponent} from '../../mainpages-friedl-footer/mainpages-footer-friedl.component';

@Component({
  selector: 'app-page-about-me-friedl',
  imports: [RouterLink,
    RouterLinkActive,
    HeaderFriedlComponent,
    FooterFriedlComponent
    ],
  standalone: true,
  templateUrl: './page-about-me-friedl.component.html',
  styleUrl: './page-about-me-friedl.component.scss'
})
export class PageAboutFriedlComponent {
  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
