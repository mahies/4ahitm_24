import { Routes } from '@angular/router';
import {PageDemoComponent} from './pages/pages-demo/page-demo/page-demo.component';
import {PageHomeComponent} from './pages/page-home/page-home.component';
import {PageAboutMePONTComponent} from './pages/pages-students/pages-pont/page-about-me-pont/page-about-me-pont.component';
import {PageAboutMeKOVACSComponent} from "./pages/pages-students/page-about-me-kovacs/page-about-me-kovacs.component";
import {PageAboutMeZHOUComponent} from "./pages/pages-students/page-about-me-zhou/page-about-me-zhou.component";
import {PageAboutmeHobelComponent} from "./pages/pages-students/page-aboutme-hobel/page-aboutme-hobel.component";
import {PageAboutMeHauerComponent} from "./pages/pages-students/page-about-me-Hauer/page-about-me-hauer.component";
import {PageAboutmeNovoComponent} from "./pages/pages-students/page-aboutme-novo/page-aboutme-novo.component";
import {PageAboutmeMETZComponent} from "./pages/pages-students/page-aboutme-metz/page-aboutme-metz.component";
import {PageAboutMeSCHOENComponent} from './pages/pages-students/page-about-me-schoengrundner/page-about-me-schoen.component';
import {PageAboutMeGARCIAComponent} from './pages/pages-students/page-about-me-garcia/page-about-me-garcia.component';
import {PageAboutMePojarComponent} from "./pages/pages-students/page-about-me-pojar/page-about-me-pojar.component";
import {PageAboutMeKOVACICComponent} from './pages/pages-students/page-about-me-kovacic/page-about-me-kovacic.component';
import {PageAboutMeWAGNComponent} from './pages/pages-students/page-about-me-wagn/page-about-me-wagn.component';
import {PageAboutMeMajzelComponent} from './pages/pages-students/page-about-me-majzel/page-about-me-majzel.component';
import {PageAboutMeMutisevicComponent} from './pages/pages-students/page-about-me-mutisevic/page-about-me-mutisevic.component';
import {PageAboutFriedlComponent} from './pages/pages-students/page-about-me-friedl/page-about-me-friedl.component';
import {Subpage1Component} from './pages/pages-demo/subpage1/subpage1.component';
import {Subpage2Component} from './pages/pages-demo/subpage2/subpage2.component';

export const routes: Routes = [
  { path: '', // default rout
    component: PageHomeComponent },
  { path: 'home',
    component: PageHomeComponent },
  { path: 'page_demo',
    component: PageDemoComponent },
  {
    path: 'page_demo/subpage1',
    component: Subpage1Component,
  },
  {
    path: 'page_demo/subpage2',
    component: Subpage2Component,
  },
  { path: 'page_pont',
    component: PageAboutMePONTComponent },
  { path: 'page_kovacs',
    component: PageAboutMeKOVACSComponent },
  { path: 'page_zhou',
    component: PageAboutMeZHOUComponent },
  { path: 'page_hauer',
    component: PageAboutMeHauerComponent },
  { path: 'page_novo',
    component: PageAboutmeNovoComponent },
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
  { path: 'page_wagner',
    component: PageAboutMeWAGNComponent },
  { path: 'page_majzel',
    component: PageAboutMeMajzelComponent },
  { path: 'page_mutisevic',
    component: PageAboutMeMutisevicComponent },
  { path: 'page_friedl',
    component: PageAboutFriedlComponent},
];

