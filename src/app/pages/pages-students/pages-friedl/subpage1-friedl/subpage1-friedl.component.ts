import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../model/person';


@Component({
  selector: 'subpage1-friedl',
  templateUrl: './subpage1-friedl.component.html',
  styleUrl: './subpage1-friedl.component.scss',
  standalone: true
})
export class Subpage1FriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
