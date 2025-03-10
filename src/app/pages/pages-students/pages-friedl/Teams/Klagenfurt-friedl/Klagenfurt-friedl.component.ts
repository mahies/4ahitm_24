import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderFriedlComponent} from "../../mainpages-friedl-header/mainpages-header-friedl.component";
import {FooterFriedlComponent} from '../../mainpages-friedl-footer/mainpages-footer-friedl.component';


@Component({
  selector: 'Klagenfurt-friedl',
  templateUrl: './Klagenfurt-friedl.component.html',
  styleUrl: './Klagenfurt-friedl.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderFriedlComponent,
    FooterFriedlComponent
  ],
  standalone: true
})
export class KlagenfurtFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
