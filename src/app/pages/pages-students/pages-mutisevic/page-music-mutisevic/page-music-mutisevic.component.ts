import { Component } from '@angular/core';
import {MUTISEVIC} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-music-mutisevic',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-music-mutisevic.component.html',
  standalone: true,
  styleUrl: './page-music-mutisevic.component.scss'
})
export class PageMusicMutisevicComponent {
  Person= MUTISEVIC;
  protected readonly me = MUTISEVIC;

}
