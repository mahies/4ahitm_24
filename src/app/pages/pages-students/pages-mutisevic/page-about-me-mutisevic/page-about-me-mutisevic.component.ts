import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {KOVACS, MUTISEVIC} from '../../../../model/person';

@Component({
  selector: 'app-page-about-me-mutisevic',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-about-me-mutisevic.component.html',
  standalone: true,
  styleUrl: './page-about-me-mutisevic.component.scss'
})
export class PageAboutMeMutisevicComponent {
Person= MUTISEVIC;
  protected readonly me = MUTISEVIC;
}
