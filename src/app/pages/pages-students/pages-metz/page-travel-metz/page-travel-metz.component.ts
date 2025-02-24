import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {OrderByPipe} from '../../../../pipes/orderBy.pipe';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TRAVEL, Travel} from '../travel';


@Component({
  selector: 'app-page-travel-metz',
  imports: [
    NgForOf,
    OrderByPipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-travel-metz.component.html',
  styleUrl: './page-travel-metz.component.scss'
})
export class PageTravelMetzComponent {
  reise: Travel[] = TRAVEL;

  getMonthAsText(month: number): string {
    const monthNames = [
      'Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni',
      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ];
    return monthNames[month];
  }
}
