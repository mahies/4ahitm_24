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

  playboiCarti = {
    name: 'Playboi Carti',
    realName: 'Jordan Terrell Carter',
    birthday: '13. September 1996',
    birthplace: 'Atlanta, Georgia, USA',
    genre: 'Hip-Hop, Rap, Trap',
    debutAlbum: 'Die Lit (2018)',
    latestAlbum: 'Whole Lotta Red (2020)',
    imageUrl: 'https://link-zu-einem-playboi-carti-bild.com/bild.jpg',
    description: `
      Playboi Carti ist ein US-amerikanischer Rapper und Songwriter, der für seinen einzigartigen Sound, seine experimentellen Beats
      und seinen minimalistischen Stil bekannt ist. Mit Hits wie "Magnolia" und "Shoota" hat er die Hip-Hop-Szene revolutioniert
      und eine große Fangemeinde aufgebaut. Seine Alben, darunter "Whole Lotta Red", haben Kultstatus erreicht. 2024 wäre auch sein
      neues Album "I AM MUSIC" erschienen, aber mal wieder lügte er seine Fans an ;(
    `,
    spotifyLink: 'https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK',
    instagramLink: 'https://www.instagram.com/playboicarti/',
  };
}
