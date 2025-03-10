import { Component } from '@angular/core';
import {flaggen,FLAGGEN} from "../flaggen";
import {DatePipe, NgForOf} from '@angular/common';

import {RouterLink, RouterLinkActive} from '@angular/router';
import {KOVACS} from '../../../../model/person';
import {HeaderKovacsComponent} from '../header-kovacs/header-kovacs.component';

@Component({
  selector: 'app-page-reviews-kovacs',
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive,
    DatePipe,
    HeaderKovacsComponent
  ],
  templateUrl: './page-reviews-kovacs.component.html',
  styleUrl: './page-reviews-kovacs.component.scss'
})
export class PageReviewsKovacsComponent {

  flagge: flaggen[] = FLAGGEN;

  protected readonly me = KOVACS;
}
