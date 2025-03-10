import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { HeaderFriedlComponent } from '../../mainpages-friedl-header/mainpages-header-friedl.component';
import {FooterFriedlComponent} from '../../mainpages-friedl-footer/mainpages-footer-friedl.component';

@Component({
  selector: 'subpage1-friedl',
  templateUrl: './subpage1-friedl.component.html',
  styleUrl: './subpage1-friedl.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderFriedlComponent,
    FooterFriedlComponent
  ],
})
export class Subpage1FriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
