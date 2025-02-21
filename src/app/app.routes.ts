import { Routes } from '@angular/router';
import {PageDemoComponent} from './pages/pages-demo/page-demo/page-demo.component';
import {PageHomeComponent} from './pages/page-home/page-home.component';
import {PageAboutMePONTComponent} from './pages/pages-students/pages-pont/page-about-me-pont/page-about-me-pont.component';
import {PageAboutMeKOVACSComponent} from "./pages/pages-students/pages-kovacs/page-about-me-kovacs/page-about-me-kovacs.component";
import {PageLieblingsessenKovacsComponent} from "./pages/pages-students/pages-kovacs/page-lieblingsessen-kovacs/page-lieblingsessen-kovacs.component";
import {PageReviewsKovacsComponent} from "./pages/pages-students/pages-kovacs/page-reviews-kovacs/page-reviews-kovacs.component";
import {PageHeimatKovacsComponent} from "./pages/pages-students/pages-kovacs/page-heimat-kovacs/page-heimat-kovacs.component";
import {PageAboutMeZHOUComponent} from "./pages/pages-students/pages-zhou/page-about-me-zhou/page-about-me-zhou.component";
import {PageAboutmeHobelComponent} from "./pages/pages-students/page-aboutme-hobel/page-aboutme-hobel.component";
import {PageAboutMeHauerComponent} from "./pages/pages-students/pages_Hauer/page-about-me-Hauer/page-about-me-hauer.component";
import {PageAboutmeNovoComponent} from "./pages/pages-students/page-novo/page-aboutme-novo/page-aboutme-novo.component";
import {PageAboutmeMETZComponent} from "./pages/pages-students/pages-metz/page-aboutme-metz/page-aboutme-metz.component";
import {PageAboutMeSCHOENComponent} from './pages/pages-students/page-about-me-schoengrundner/page-about-me-schoen.component';
import {PageAboutMeGARCIAComponent} from './pages/pages-students/page-garcia/page-about-me-garcia/page-about-me-garcia.component';
import {PageAboutMePojarComponent} from "./pages/pages-students/page-about-me-pojar/page-about-me-pojar.component";
import {PageGetesteteDoenerPojarComponent} from "./pages/pages-students/page-about-me-pojar/page-getestete-doener-pojar/page-getestete-doener-pojar.component";
import {PageLieblingsessenPojarComponent} from "./pages/pages-students/page-about-me-pojar/page-lieblingsessen-pojar/page-lieblingsessen-pojar.component";
import {PageAboutMeKOVACICComponent} from './pages/pages-students/pages-kovacic/page-about-me-kovacic/page-about-me-kovacic.component';
import {PageAboutMeWAGNComponent} from './pages/pages-students/pages-wagner/page-about-me-wagn/page-about-me-wagn.component';
import {PageAboutMeMajzelComponent} from './pages/pages-students/pages_majzel/page-about-me-majzel/page-about-me-majzel.component';
import {PageAboutMeMutisevicComponent} from './pages/pages-students/pages-mutisevic/page-about-me-mutisevic/page-about-me-mutisevic.component';
import {PageAboutFriedlComponent} from './pages/pages-students/pages-friedl/page-about-me-friedl/page-about-me-friedl.component';
import {PageAboutMeCizmicComponent} from './pages/pages-students/pages-cizmic/page-about-me-cizmic/page-about-me-cizmic.component';
import {PageAboutMeCocoComponent} from './pages/pages-students/page-about-me-coco/page-about-me-coco.component';
import {PageMeineReisenGARCIAComponent} from './pages/pages-students/page-garcia/page-meine-reisen-garcia/page-meine-reisen-garcia.component';

import {
  PageHaustiereWAGNERComponent
} from './pages/pages-students/pages-wagner/page-haustiere-wagner/page-haustiere-wagner.component';
import {
  PageLieblingsfilmundmusikWAGNERComponent
} from './pages/pages-students/pages-wagner/page-lieblingsfilmundmusik-wagner/page-lieblingsfilmundmusik-wagner.component';
import {
  PageReviewsMetzComponent
} from './pages/pages-students/pages-metz/page-reviews-metz/page-reviews-metz.component';
import {
  PageSubpage1NovoComponent
} from './pages/pages-students/page-novo/page-subpage1-novo/page-subpage1-novo.component';
import {
  PageSubpage2NovoComponent
} from './pages/pages-students/page-novo/page-subpage2-novo/page-subpage2-novo.component';
import {
  PageHobbiesWAGNERComponent
} from './pages/pages-students/pages-wagner/page-hobbies-wagner/page-hobbies-wagner.component';
import {
  PageHobbyMutisevicComponent
} from './pages/pages-students/pages-mutisevic/page-hobby-mutisevic/page-hobby-mutisevic.component';
import {
  PageMusicMutisevicComponent
} from './pages/pages-students/pages-mutisevic/page-music-mutisevic/page-music-mutisevic.component';
import {
  PageLieblingsmusikZhouComponent
} from './pages/pages-students/pages-zhou/page-lieblingsmusik-zhou/page-lieblingsmusik-zhou.component';
import {
  PageHobbiesMajzelComponent
} from './pages/pages-students/pages_majzel/page-hobbies-majzel/page-hobbies-majzel.component';
import {
  PagePolenMajzelComponent
} from './pages/pages-students/pages_majzel/page-polen-majzel/page-polen-majzel.component';
import {
  PageReisenMajzelComponent
} from './pages/pages-students/pages_majzel/page-reisen-majzel/page-reisen-majzel.component';
import {
  PageLieblingsfotosZhouComponent
} from './pages/pages-students/pages-zhou/page-lieblingsfotos-zhou/page-lieblingsfotos-zhou.component';
import {
  Subpage1FriedlComponent
} from './pages/pages-students/pages-friedl/subpage1-friedl/subpage1-friedl.component';
import {
  Subpage2FriedlComponent
} from './pages/pages-students/pages-friedl/subpage2-friedl/subpage2-friedl.component';
import {
  PageLieblingssaengerinGARCIAComponent
} from './pages/pages-students/page-garcia/page-lieblingssaengerin-garcia/page-lieblingssaengerin-garcia.component';
import {PageHaustiereHauerComponent} from './pages/pages-students/pages_Hauer/Haustiere/page-haustiere-hauer.component';
import {PageHobbiesHauerComponent} from './pages/pages-students/pages_Hauer/Hobbies/page-hobbies-hauer.component';
import {PageArtComponent} from './pages/pages-students/pages-cizmic/page-art/page-art.component';

import {
  LASKFriedlComponent
} from './pages/pages-students/pages-friedl/LASK-friedl/LASK-friedl.component';
import {
  AltachFriedlComponent
} from './pages/pages-students/pages-friedl/Altach-friedl/Altach-friedl.component';
import {
  BWLFriedlComponent
} from './pages/pages-students/pages-friedl/BWL-friedl/BWL-friedl.component';
import {
  FAKFriedlComponent
} from './pages/pages-students/pages-friedl/FAK-friedl/FAK-friedl.component';
import {
  GAKFriedlComponent
} from './pages/pages-students/pages-friedl/GAK-friedl/GAK-friedl.component';
import {
  HartbergFriedlComponent
} from './pages/pages-students/pages-friedl/Hartberg-friedl/Hartberg-friedl.component';
import {
  KlagenfurtFriedlComponent
} from './pages/pages-students/pages-friedl/Klagenfurt-friedl/Klagenfurt-friedl.component';
import {
  SalzburgFriedlComponent
} from './pages/pages-students/pages-friedl/Salzburg-friedl/Salzburg-friedl.component';
import {
  SturmFriedlComponent
} from './pages/pages-students/pages-friedl/Sturm-friedl/Sturm-friedl.component';
import {
  WACFriedlComponent
} from './pages/pages-students/pages-friedl/WAC-friedl/WAC-friedl.component';
import {
  WSGFriedlComponent
} from './pages/pages-students/pages-friedl/WSG-friedl/WSG-friedl.component';
import {
  PageLieblingsessenKovacicComponent
} from './pages/pages-students/pages-kovacic/page-lieblingsessen-kovacic/page-lieblingsessen-kovacic.component';
import {
  PageTravelMetzComponent
} from './pages/pages-students/pages-metz/page-travel-metz/page-travel-metz.component';
import {PageMusicCocoComponent} from './pages/pages-students/pages-coco/page-music-coco/page-music-coco.component';
import {PageDesignCocoComponent} from './pages/pages-students/pages-coco/page-design-coco/page-design-coco.component';
import {
  Subpage1SchoenComponent
} from './pages/pages-students/page-about-me-schoengrundner/page-subpage1/subpage1-schoen.component';
import {
  Subpage2SchoenComponent
} from './pages/pages-students/page-about-me-schoengrundner/page-subpage2/subpage2-schoen.component';

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
  { path: 'page_kovacs_reviews',
    component: PageReviewsKovacsComponent },
  { path: 'page_kovacs_lieblingsessen',
    component: PageLieblingsessenKovacsComponent },
  { path: 'page_kovacs_heimat',
    component: PageHeimatKovacsComponent },
  { path: 'page_zhou',
    component: PageAboutMeZHOUComponent },
  { path: 'page_coco',
  component: PageAboutMeCocoComponent },
  { path: 'page_zhou_lieblingsmusik',
    component: PageLieblingsmusikZhouComponent},
  { path: 'page_zhou_lieblingsfotos',
    component: PageLieblingsfotosZhouComponent},
  { path: 'page_hauer',
    component: PageAboutMeHauerComponent },
  { path: 'page_haustiere_hauer',
    component: PageHaustiereHauerComponent},
  { path: 'page_hobbies_hauer',
    component: PageHobbiesHauerComponent},
  { path: 'page_novo',
    component: PageAboutmeNovoComponent },
  { path: 'page_novo_subpage1',
    component: PageSubpage1NovoComponent },
  { path: 'page_novo_subpage2',
    component: PageSubpage2NovoComponent },
  { path: 'page_metz',
    component: PageAboutmeMETZComponent },
  { path: 'page_metz_reviews',
    component: PageReviewsMetzComponent },
  { path: 'page_hobel',
    component: PageAboutmeHobelComponent },
  { path: 'page_garcia',
    component: PageAboutMeGARCIAComponent },
  { path: 'page_schoen',
    component: PageAboutMeSCHOENComponent },
  { path: 'page_schoen',
    component: PageAboutMeSCHOENComponent },
  { path: 'subpage2_schoen',
    component: Subpage2SchoenComponent},
  { path: 'subpage1_schoen',
    component: Subpage1SchoenComponent},
  { path: 'page_pojar',
    component: PageAboutMePojarComponent },
  { path: 'page_kovacic',
    component: PageAboutMeKOVACICComponent },
  { path: 'page-lieblingsessen-kovacic',
    component: PageLieblingsessenKovacicComponent},
  { path: 'page_wagner',
    component: PageAboutMeWAGNComponent },
  { path: 'page_haustiere_wagner',
    component: PageHaustiereWAGNERComponent },
  { path: 'page_lieblingsfilmundmusik_wagner',
    component: PageLieblingsfilmundmusikWAGNERComponent },
  { path: 'page_hobbies_wagner',
    component: PageHobbiesWAGNERComponent },
  { path: 'page_majzel',
    component: PageAboutMeMajzelComponent},
  { path: 'page_majzel_hobbies',
    component: PageHobbiesMajzelComponent},
  { path: 'page_majzel_reisen ',
    component: PageReisenMajzelComponent},
  { path: 'page_majzel_polen',
    component: PagePolenMajzelComponent},
  { path: 'page_mutisevic',
    component: PageAboutMeMutisevicComponent },
  { path: 'page-hobby-mutisevic',
    component: PageHobbyMutisevicComponent },
  { path: 'page-music-mutisevic',
    component: PageMusicMutisevicComponent },
  { path: 'page_friedl',
    component: PageAboutFriedlComponent},
  { path: 'subpage1-friedl',
    component: Subpage1FriedlComponent},
  { path: 'subpage2-friedl',
    component: Subpage2FriedlComponent},
  { path: 'page_cizmic',
    component: PageAboutMeCizmicComponent },
  { path: 'page-art',
    component: PageArtComponent },
  { path: 'page-lieblingssaengerin-garcia',
    component: PageLieblingssaengerinGARCIAComponent },
  { path: 'LASK-friedl',
    component: LASKFriedlComponent},
  { path: 'WSG-friedl',
    component: WSGFriedlComponent},
  { path: 'Sturm-friedl',
    component: SturmFriedlComponent},
  { path: 'Salzburg-friedl',
    component: SalzburgFriedlComponent},
  { path: 'Klagenfurt-friedl',
    component: KlagenfurtFriedlComponent},
  { path: 'Hartberg-friedl',
    component: HartbergFriedlComponent},
  { path: 'GAK-friedl',
    component: GAKFriedlComponent},
  { path: 'FAK-friedl',
    component: FAKFriedlComponent},
  { path: 'BWL-friedl',
    component: BWLFriedlComponent},
  { path: 'Altach-friedl',
    component: AltachFriedlComponent},
  { path: 'WAC-friedl',
    component: WACFriedlComponent},
  { path: 'page-meine-reisen-garcia',
    component: PageMeineReisenGARCIAComponent},
  { path: 'page-lieblingsessen-pojar',
    component: PageLieblingsessenPojarComponent},
  { path: 'page-travel-metz',
    component: PageTravelMetzComponent},
  { path: 'page-getestete-doener-pojar',
    component: PageGetesteteDoenerPojarComponent},
  { path: 'page-music-coco',
    component: PageMusicCocoComponent},
  { path: 'page-design-coco',
    component: PageDesignCocoComponent}
];

