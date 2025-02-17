import { Component } from '@angular/core';
import {Person, SCHOENGRUNDNER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'subpage2-schoen',
  templateUrl: './subpage2-schoen.component.html',
  styleUrl: './subpage2-schoen.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class Subpage2SchoenComponent {

  me_schoen: Person = SCHOENGRUNDNER;
  protected readonly me = SCHOENGRUNDNER;
}
