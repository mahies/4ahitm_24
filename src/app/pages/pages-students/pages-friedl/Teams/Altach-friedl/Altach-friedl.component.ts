import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {FooterFriedlComponent} from "../../mainpages-friedl-footer/mainpages-footer-friedl.component";
import {HeaderFriedlComponent} from '../../mainpages-friedl-header/mainpages-header-friedl.component';


@Component({
  selector: 'Altach-friedl',
  templateUrl: './Altach-friedl.component.html',
  styleUrl: './Altach-friedl.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    FooterFriedlComponent,
    HeaderFriedlComponent
  ],
  standalone: true
})
export class AltachFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
