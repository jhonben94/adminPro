import { Routes, RouterModule } from '@angular/router';
/*
Importaciones de los modulos definidos en el proyecto
y asignacion de rutas.
*/

import { LoginComponent } from './login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    // { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: '**', component: PagenofoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );
