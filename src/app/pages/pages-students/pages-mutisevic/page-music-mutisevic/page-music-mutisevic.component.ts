import { Component } from '@angular/core';
import {carti} from '../carti';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MUTISEVIC} from '../../../../model/person';

@Component({
  selector: 'app-page-music-mutisevic',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-music-mutisevic.component.html',
  standalone: true,
  styleUrl: './page-music-mutisevic.component.scss'
})
export class PageMusicMutisevicComponent {
  protected readonly me = carti;

}
