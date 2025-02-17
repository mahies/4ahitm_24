import { Component } from '@angular/core';
import {MAJZEL} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-hobbies-majzel',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-hobbies-majzel.component.html',
  styleUrl: './page-hobbies-majzel.component.scss'
})
export class PageHobbiesMajzelComponent {

  protected readonly me = MAJZEL;
}
