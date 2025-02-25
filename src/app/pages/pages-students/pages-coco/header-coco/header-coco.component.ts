import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-coco',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-coco.component.html',
  styleUrl: './header-coco.component.scss'
})
export class HeaderCocoComponent {

}
