import { Component } from '@angular/core';
import {Album, ALBEN} from "../album";
import {NgForOf} from "@angular/common";
import {OrderByPipe} from "../../../../pipes/orderBy.pipe";

@Component({
  selector: 'app-page-reviews-metz',
    imports: [
        NgForOf,
        OrderByPipe
    ],
  templateUrl: './page-reviews-metz.component.html',
  styleUrl: './page-reviews-metz.component.scss'
})
export class PageReviewsMetzComponent {

  alben: Album[] = ALBEN;
}
