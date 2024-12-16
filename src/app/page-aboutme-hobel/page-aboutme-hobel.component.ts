import { Component } from '@angular/core';
import {Person, MINNIE, HOBEL, MAJZEL} from '../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-aboutme-hobel',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page-aboutme-hobel.component.html',
  styleUrl: './page-aboutme-hobel.component.scss',
  standalone: true
})
export class PageAboutmeHobelComponent {
  me_hobel: Person = HOBEL;
  protected readonly me = HOBEL;
}
