import { Component } from '@angular/core';
import {Album, ALBEN} from "../album";
import {Film, FILME} from "../film";
import {NgForOf, NgIf} from "@angular/common";
import {OrderByPipe} from "../../../../pipes/orderBy.pipe";
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-reviews-metz',
  imports: [
    NgForOf,
    OrderByPipe,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './page-reviews-metz.component.html',
  styleUrl: './page-reviews-metz.component.scss'
})
export class PageReviewsMetzComponent {

  alben: Album[] = ALBEN;
  filme: Film[] = FILME;

  isMusicActive: boolean = true;

  showMusicReviews() {
    this.isMusicActive = true;
  }

  showFilmReviews() {
    this.isMusicActive = false;
  }
}
