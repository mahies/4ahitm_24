import { Component } from '@angular/core';
import {NOVO} from '../../../../model/person';

@Component({
  selector: 'app-page-aboutme-novo',
  imports: [],
  templateUrl: './page-aboutme-novo.component.html',
  standalone: true,
  styleUrl: './page-aboutme-novo.component.scss'
})
export class PageAboutmeNovoComponent {

  protected readonly me = NOVO;
}
