import { Component } from '@angular/core';
import {CIZMIC} from "../../../../model/person";
import {HeaderCizComponent} from "../header-ciz/header-ciz.component";
import {FooterCizComponent} from '../footer-ciz/footer-ciz.component';

@Component({
  selector: 'app-page-art',
  imports: [
    HeaderCizComponent,
    FooterCizComponent
  ],
  templateUrl: './page-art.component.html',
  styleUrl: './page-art.component.scss'
})
export class PageArtComponent {

    protected readonly elCi = CIZMIC;
}
