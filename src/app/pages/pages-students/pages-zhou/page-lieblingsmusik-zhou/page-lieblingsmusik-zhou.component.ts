import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ZHOU} from "../../../../model/person";


@Component({
    selector: 'app-page-lieblingsmusik-zhou',
    templateUrl: './page-lieblingsmusik-zhou.component.html',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    styleUrl: './page-lieblingsmusik-zhou.component.scss'
})
export class PageLieblingsmusikZhouComponent {

    protected readonly me = ZHOU;
}
