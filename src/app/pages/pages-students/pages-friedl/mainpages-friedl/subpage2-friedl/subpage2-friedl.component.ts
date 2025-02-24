import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'subpage2-friedl',
  templateUrl: './subpage2-friedl.component.html',
  styleUrl: './subpage2-friedl.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class Subpage2FriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
