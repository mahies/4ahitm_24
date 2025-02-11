import { Component } from '@angular/core';
import {CIZMIC} from "../../../../model/person";

@Component({
  selector: 'app-page-art',
  imports: [],
  templateUrl: './page-art.component.html',
  styleUrl: './page-art.component.scss'
})
export class PageArtComponent {

    protected readonly elCi = CIZMIC;
}
