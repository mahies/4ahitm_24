import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {htl} from '../../pages-mutisevic/htl';

@Component({
  selector: 'app-page-header-garcia',
  imports: [RouterLink,
    RouterLinkActive],
  standalone: true,
  templateUrl: './page-header-garcia.component.html',
  styleUrl: './page-header-garcia.component.scss'
})
export class PageHeaderGarciaComponent {

  protected readonly me = htl;
}
