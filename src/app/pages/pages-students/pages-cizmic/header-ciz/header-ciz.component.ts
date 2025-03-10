import { Component } from '@angular/core';
import {CIZMIC} from "../../../../model/person";
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-ciz',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-ciz.component.html',
  styleUrl: './header-ciz.component.scss'
})
export class HeaderCizComponent {

    protected readonly elCi = CIZMIC;
}
