import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderFriedlComponent} from "../../mainpages-friedl-header/mainpages-header-friedl.component";
import {FooterFriedlComponent} from '../../mainpages-friedl-footer/mainpages-footer-friedl.component';


@Component({
  selector: 'Salzburg-friedl',
  templateUrl: './Sturm-friedl.component.html',
  styleUrl: './Sturm-friedl.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderFriedlComponent,
    FooterFriedlComponent
  ],
  standalone: true
})
export class SturmFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
