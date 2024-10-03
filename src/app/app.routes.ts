import { Routes } from '@angular/router';
import {HomeContentComponent} from './public/pages/home-content/home-content.component';
import {NotFoundPageComponent} from './public/pages/not-found-page/not-found-page.component';
import {NewRatingComponent} from './engagement/pages/new-rating/new-rating.component';

export const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'engagement/ratings/new', component: NewRatingComponent },
  { path: '**', component: NotFoundPageComponent }
];
