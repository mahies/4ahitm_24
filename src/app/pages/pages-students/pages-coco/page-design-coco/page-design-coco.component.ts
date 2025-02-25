import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderCocoComponent} from "../header-coco/header-coco.component";

@Component({
  selector: 'app-page-design-coco',
    imports: [RouterLink, RouterLinkActive, HeaderCocoComponent],
  templateUrl: './page-design-coco.component.html',
  standalone: true,
  styleUrl: './page-design-coco.component.scss'
})
export class PageDesignCocoComponent {


}
