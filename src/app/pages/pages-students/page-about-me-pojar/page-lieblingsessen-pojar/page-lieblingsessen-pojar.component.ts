import { Component } from '@angular/core';
import {POJAR} from '../../../../model/person';

@Component({
  selector: 'app-page-lieblingsessen-pojar',
  imports: [],
  templateUrl: './page-lieblingsessen-pojar.component.html',
  styleUrl: './page-lieblingsessen-pojar.component.scss'
})
export class PageLieblingsessenPojarComponent {

  protected readonly me = POJAR;
}
