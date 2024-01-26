import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMePageComponent } from './about-us-page/about-me-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'o-nas',
    component: AboutMePageComponent,
  },
];
