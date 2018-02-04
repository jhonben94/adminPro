import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';

// rutas
import { APP_ROUTES } from './app.routes';

// modulos
import { PagesModule } from './pages/pages.modulo';
// temporal
import { FormsModule } from '@angular/forms';
// Servicios
import { ServiceModule } from './services/service.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
