import { Component } from '@angular/core';
import {Person, RADDA} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'subpage2-radda',
  templateUrl: './subpage2-radda.component.html',
  styleUrl: './subpage2-radda.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class Subpage2SchoenComponent {

  me_radda: Person = RADDA;
  protected readonly me = RADDA;
}

