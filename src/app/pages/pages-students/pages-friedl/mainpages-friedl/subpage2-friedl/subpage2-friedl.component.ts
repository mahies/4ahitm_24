import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person, FRIEDL } from '../../../../../model/person';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderFriedlComponent } from '../../mainpages-friedl-header/mainpages-header-friedl.component';
import {FooterFriedlComponent} from '../../mainpages-friedl-footer/mainpages-footer-friedl.component';

@Component({
  selector: 'subpage2-friedl',
  templateUrl: './subpage2-friedl.component.html',
  styleUrls: ['./subpage2-friedl.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    HeaderFriedlComponent,
    FooterFriedlComponent
  ],
  standalone: true
})
export class Subpage2FriedlComponent {
  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
