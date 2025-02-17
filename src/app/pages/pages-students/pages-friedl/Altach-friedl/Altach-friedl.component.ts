import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'Altach-friedl',
  templateUrl: './Altach-friedl.component.html',
  styleUrl: './Altach-friedl.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class AltachFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
