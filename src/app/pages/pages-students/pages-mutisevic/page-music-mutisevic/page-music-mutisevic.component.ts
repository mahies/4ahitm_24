import { Component } from '@angular/core';
import {carti} from '../carti';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MUTISEVIC} from '../../../../model/person';
import {PageHeaderMutisevicComponent} from '../page-header-mutisevic/page-header-mutisevic.component';

@Component({
  selector: 'app-page-music-mutisevic',
  imports: [RouterLink, RouterLinkActive, PageHeaderMutisevicComponent],
  templateUrl: './page-music-mutisevic.component.html',
  standalone: true,
  styleUrl: './page-music-mutisevic.component.scss'
})
export class PageMusicMutisevicComponent {
  protected readonly me = carti;

}
