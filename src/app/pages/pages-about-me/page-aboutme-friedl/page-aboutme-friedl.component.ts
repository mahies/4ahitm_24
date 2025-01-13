import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {KOVACS, FRIEDL} from '../../../model/person';

@Component({
  selector: 'app-page-about-me-friedl',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-about-me-friedl.component.html',
  standalone: true,
  styleUrl: './page-about-me-friedl.component.scss'
})
export class PageAboutmeFriedlComponent {
  Person= FRIEDL;
  protected readonly me = FRIEDL;
}
