import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMePageComponent } from './about-us-page/about-me-page.component';
import { ProblemsPageComponent } from './problems-page/problems-page.component';
import { ProceduresPageComponent } from './procedures-page/procedures-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'o-nas',
    component: AboutMePageComponent,
  },
  {
    path: 'problemy',
    component: ProblemsPageComponent,
  },
  {
    path: 'zabiegi',
    component: ProceduresPageComponent,
  },
  {
    path: 'cennik',
    component: PricingPageComponent,
  },
];
