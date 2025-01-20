import { Component } from '@angular/core';
import {Person, CIZMIC} from '../../../model/person';


@Component({
  selector: 'app-page-about-me-cizmic',
  imports: [],
  templateUrl: './page-about-me-cizmic.component.html',
  styleUrl: './page-about-me-cizmic.component.scss',
  standalone: true
})
export class PageAboutMeCizmicComponent {
  elCi = CIZMIC;
}
