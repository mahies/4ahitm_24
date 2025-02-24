import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'Salzburg-friedl',
  templateUrl: './Sturm-friedl.component.html',
  styleUrl: './Sturm-friedl.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class SturmFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
