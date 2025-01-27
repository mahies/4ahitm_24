import { Component } from '@angular/core';
import {Person, HAUER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-hobbies-hauer',
  templateUrl: './page-hobbies-hauer.component.html',
  styleUrls: ['./page-hobbies-hauer.component.scss'],
  standalone: true
})
export class PageHobbiesHauerComponent {
 me_hauer: Person = HAUER;
}
