import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-about-me-friedl',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page-about-me-friedl.component.html',
  styleUrl: './page-about-me-friedl.component.scss',
  standalone: true
})
export class PageAboutFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
