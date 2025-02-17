import { Component } from '@angular/core';
import {POJAR} from '../../../../model/person';

@Component({
  selector: 'app-lieblingsessen',
  imports: [],
  templateUrl: './lieblingsessen.component.html',
  styleUrl: './lieblingsessen.component.scss'
})
export class LieblingsessenComponent {

  protected readonly me = POJAR;
}
