import { Component } from '@angular/core';
import {HeaderCizComponent} from "../header-ciz/header-ciz.component";
import {FooterCizComponent} from '../footer-ciz/footer-ciz.component';

@Component({
  selector: 'app-page-delta-ciz',
  imports: [
    HeaderCizComponent,
    FooterCizComponent
  ],
  templateUrl: './page-delta-ciz.component.html',
  styleUrl: './page-delta-ciz.component.scss'
})
export class PageDeltaCizComponent {

}
