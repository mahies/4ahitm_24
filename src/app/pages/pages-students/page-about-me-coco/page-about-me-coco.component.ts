import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {COCO} from '../../../model/person';
import {HeaderCocoComponent} from '../pages-coco/header-coco/header-coco.component';
import {FooterCocoComponent} from '../pages-coco/footer-coco/footer-coco.component';

@Component({
  selector: 'app-page-about-me-coco',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderCocoComponent,
    FooterCocoComponent
  ],
  templateUrl: './page-about-me-coco.component.html',
  styleUrl: './page-about-me-coco.component.scss'
})
export class PageAboutMeCocoComponent {

  protected readonly coco = COCO;
}
