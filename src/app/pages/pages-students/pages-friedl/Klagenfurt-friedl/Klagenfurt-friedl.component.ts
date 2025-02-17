import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'Klagenfurt-friedl',
  templateUrl: './Klagenfurt-friedl.component.html',
  styleUrl: './Klagenfurt-friedl.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class KlagenfurtFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
