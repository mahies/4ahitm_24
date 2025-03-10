import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {WAGNER} from "../../../../model/person";

@Component({
  selector: 'app-page-hobbies-wagner',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-hobbies-wagner.component.html',
  styleUrl: './page-hobbies-wagner.component.scss'
})
export class PageHobbiesWAGNERComponent {

    protected readonly me = WAGNER;
}
