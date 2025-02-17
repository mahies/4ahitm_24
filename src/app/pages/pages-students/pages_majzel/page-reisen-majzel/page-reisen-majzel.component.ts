import { Component } from '@angular/core';
import {MAJZEL} from "../../../../model/person";

@Component({
  selector: 'app-page-reisen-majzel',
  imports: [],
  templateUrl: './page-reisen-majzel.component.html',
  styleUrl: './page-reisen-majzel.component.scss'
})
export class PageReisenMajzelComponent {

    protected readonly me = MAJZEL;
}
