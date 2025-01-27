import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../model/person';


@Component({
  selector: 'subpage2-friedl',
  templateUrl: './subpage2-friedl.component.html',
  styleUrl: './subpage2-friedl.component.scss',
  standalone: true
})
export class Subpage2FriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
