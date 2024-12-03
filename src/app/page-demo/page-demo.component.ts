import { Component } from '@angular/core';
import {Person, MINNIE} from '../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-demo',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page-demo.component.html',
  styleUrl: './page-demo.component.scss',
  standalone: true
})
export class PageDemoComponent {
  me: Person = MINNIE; //Variable me vom Typ Person = KONSTANTE MOUSE
}
