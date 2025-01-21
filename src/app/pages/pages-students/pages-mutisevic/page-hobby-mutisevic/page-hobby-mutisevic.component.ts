import { Component } from '@angular/core';
import {MUTISEVIC} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-hobby-mutisevic',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-hobby-mutisevic.component.html',
  standalone: true,
  styleUrl: './page-hobby-mutisevic.component.scss'
})
export class PageHobbyMutisevicComponent {
  Person= MUTISEVIC;
  protected readonly me = MUTISEVIC;
}
