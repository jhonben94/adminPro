import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const pagesRoutes: Routes = [
    { path: '',
    component: PagesComponent,
    children: [
       { path: 'dashboard', component: DashboardComponent},
       { path: 'progres', component: ProgressComponent },
       { path: 'graficas', component: Graficas1Component },
       { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ]
   },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);