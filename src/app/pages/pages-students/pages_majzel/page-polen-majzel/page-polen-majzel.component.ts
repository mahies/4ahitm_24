import { Component } from '@angular/core';
import {MAJZEL} from "../../../../model/person";
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-polen-majzel',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-polen-majzel.component.html',
  styleUrl: './page-polen-majzel.component.scss'
})
export class PagePolenMajzelComponent {

    protected readonly me = MAJZEL;
}
