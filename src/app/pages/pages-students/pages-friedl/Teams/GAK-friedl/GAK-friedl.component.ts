import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'GAK-friedl',
  templateUrl: './GAK-friedl.component.html',
  styleUrl: './GAK-friedl.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class GAKFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
