import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-home',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss',
  standalone: true
})
export class PageHomeComponent {
  title = '4ahitm';
}
