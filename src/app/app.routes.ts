import { Routes, RouterModule } from '@angular/router';
/*
Importaciones de los modulos definidos en el proyecto
y asignacion de rutas.
*/
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    { path: '',
     component: PagesComponent,
     children: [
        { path: 'dashboard', component: DashboardComponent},
        { path: 'progres', component: ProgressComponent },
        { path: 'graficas', component: Graficas1Component },
        { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
     ]
    },
    { path: 'progres', component: ProgressComponent },
    { path: 'graficas', component: Graficas1Component },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    // { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: '**', component: PagenofoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );
