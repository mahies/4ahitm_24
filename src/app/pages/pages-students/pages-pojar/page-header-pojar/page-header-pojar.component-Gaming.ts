import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-page-header-pojar',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-header-pojar.component.html',
  styleUrl: './page-header-pojar.component.scss'
})
export class PageHeaderPojarComponent {

}
