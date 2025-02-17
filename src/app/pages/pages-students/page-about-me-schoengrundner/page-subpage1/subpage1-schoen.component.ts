import { Component } from '@angular/core';
import {Person, SCHOENGRUNDNER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'subpage1-schoen',
  templateUrl: './subpage1-schoen.component.html',
  styleUrl: './subpage1-schoen.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class Subpage1SchoenComponent {

  me_schoen: Person = SCHOENGRUNDNER;
  protected readonly me = SCHOENGRUNDNER;
}
