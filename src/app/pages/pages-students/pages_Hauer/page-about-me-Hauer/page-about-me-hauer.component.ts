import { Component } from '@angular/core';
import {Person, HAUER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-about-me-hauer',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page-about-me-hauer.component.html',
  styleUrl: './page-about-me-hauer.component.scss',
  standalone: true
})
export class PageAboutMeHauerComponent {
 me_hauer: Person = HAUER;
}
