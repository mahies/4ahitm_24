import { Component } from '@angular/core';
import {NOVO} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-aboutme-novo',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './page-aboutme-novo.component.html',
  standalone: true,
  styleUrl: './page-aboutme-novo.component.scss'
})
export class PageAboutmeNovoComponent {

  protected readonly me = NOVO;
}
