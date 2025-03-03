import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderCocoComponent} from "../header-coco/header-coco.component";
import {FooterCocoComponent} from '../footer-coco/footer-coco.component';

@Component({
  selector: 'app-page-music-coco',
  imports: [RouterLink, RouterLinkActive, HeaderCocoComponent, FooterCocoComponent],
  templateUrl: './page-music-coco.component.html',
  standalone: true,
  styleUrl: './page-music-coco.component.scss'
})
export class PageMusicCocoComponent {


}
