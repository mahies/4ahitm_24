import { Routes } from '@angular/router';
import {PageDemoComponent} from './page-demo/page-demo.component';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageAboutMePONTComponent} from './page-about-me-pont/page-about-me-pont.component';
import {PageAboutMeKOVACSComponent} from "./page-about-me-kovacs/page-about-me-kovacs.component";
import {PageAboutMeZHOUComponent} from "./page-about-me-zhou/page-about-me-zhou.component";
import {PageAboutmeHobelComponent} from "./page-aboutme-hobel/page-aboutme-hobel.component";
import {PageAboutMeHauerComponent} from "./page-about-me-Hauer/page-about-me-hauer.component";
import {PageAboutmeMETZComponent} from "./page-aboutme-metz/page-aboutme-metz.component";
import {PageAboutMeSCHOENComponent} from './page-about-me-schoengrundner/page-about-me-schoen.component';
import {PageAboutMeGARCIAComponent} from './page-about-me-garcia/page-about-me-garcia.component';
import {PageAboutMePojarComponent} from "./page-about-me-pojar/page-about-me-pojar.component";
import {PageAboutMeKOVACICComponent} from './page-about-me-kovacic/page-about-me-kovacic.component';
import {PageAboutMeWAGNComponent} from './page-about-me-wagn/page-about-me-wagn.component';
import {PageAboutMeMajzelComponent} from './page-about-me-majzel/page-about-me-majzel.component';
import {PageAboutMeCocoComponent} from './page-about-me-coco/page-about-me-coco.component';

export const routes: Routes = [
  { path: '', // default rout
    component: PageHomeComponent },
  { path: 'home',
    component: PageHomeComponent },
  { path: 'page_demo',
    component: PageDemoComponent },
  { path: 'page_pont',
    component: PageAboutMePONTComponent },
  { path: 'page_kovacs',
    component: PageAboutMeKOVACSComponent },
  { path: 'page_zhou',
    component: PageAboutMeZHOUComponent },
  { path: 'page_hauer',
    component: PageAboutMeHauerComponent },
  { path: 'page_metz',
    component: PageAboutmeMETZComponent },

  { path: 'page_hobel',
    component: PageAboutmeHobelComponent },

  { path: 'page_garcia',
    component: PageAboutMeGARCIAComponent },
  { path: 'page_schoen',
    component: PageAboutMeSCHOENComponent },

  { path: 'page_pojar',
    component: PageAboutMePojarComponent },
  { path: 'page_kovacic',
    component: PageAboutMeKOVACICComponent },
  { path: 'page_wagn',
    component: PageAboutMeWAGNComponent },
  { path: 'page_majzel',
    component: PageAboutMeMajzelComponent },
  { path: 'page_coco',
    component: PageAboutMeCocoComponent },
];

