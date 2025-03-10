import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ZHOU} from "../../../../model/person";
@Component({
    selector: 'app-page-lieblingsfotos-zhou',
    templateUrl: './page-lieblingsfotos-zhou.component.html',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    styleUrl: './page-lieblingsfotos-zhou.component.scss'
})
export class PageLieblingsfotosZhouComponent {

    protected readonly me = ZHOU;
}
