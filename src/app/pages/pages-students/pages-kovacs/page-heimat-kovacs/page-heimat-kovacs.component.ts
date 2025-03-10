import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';
import {HeaderKovacsComponent} from '../header-kovacs/header-kovacs.component';

@Component({
  selector: 'app-page-heimat-kovacs',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe,
    HeaderKovacsComponent],
  templateUrl: './page-heimat-kovacs.component.html',
  styleUrl: './page-heimat-kovacs.component.scss'
})
export class PageHeimatKovacsComponent {

}
