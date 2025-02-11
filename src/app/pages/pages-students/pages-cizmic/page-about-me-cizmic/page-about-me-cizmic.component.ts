import { Component } from '@angular/core';
import {Person, CIZMIC} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";


@Component({
  selector: 'app-page-about-me-cizmic',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './page-about-me-cizmic.component.html',
  styleUrl: './page-about-me-cizmic.component.scss',
  standalone: true
})
export class PageAboutMeCizmicComponent {
  elCi = CIZMIC;
}
