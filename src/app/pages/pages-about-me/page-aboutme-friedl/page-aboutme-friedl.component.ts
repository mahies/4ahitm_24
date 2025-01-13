import { Component } from '@angular/core';
import {Person, FRIEDL} from '../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-aboutme-friedl',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page-aboutme-friedl.component.html',
  styleUrl: './page-aboutme-friedl.component.scss',
  standalone: true
})
export class PageAboutmeFriedlComponent {

  me_friedl: Person = FRIEDL;
  protected readonly me = FRIEDL;
}
