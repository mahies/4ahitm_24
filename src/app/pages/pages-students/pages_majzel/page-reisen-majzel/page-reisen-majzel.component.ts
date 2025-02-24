import { Component } from '@angular/core';
import {MAJZEL} from "../../../../model/person";
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-reisen-majzel',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-reisen-majzel.component.html',
  styleUrl: './page-reisen-majzel.component.scss'
})
export class PageReisenMajzelComponent {

    protected readonly me = MAJZEL;
}
