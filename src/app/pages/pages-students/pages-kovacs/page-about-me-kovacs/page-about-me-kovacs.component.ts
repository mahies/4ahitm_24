import {KOVACS} from '../../../../model/person';
// @ts-ignore
import { Component } from "@angular/core";


@Component({
  selector: 'app-page-about-me-kovacs',
  imports: [],
  templateUrl: './page-about-me-kovacs.component.html',
  styleUrl: './page-about-me-kovacs.component.scss'
})
export class PageAboutMeKOVACSComponent {

  protected readonly me = KOVACS;
}
