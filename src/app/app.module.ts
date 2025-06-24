import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { FlatpickrModule } from 'angularx-flatpickr';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactarseComponent } from './pages/contactarse/contactarse.component';
//import { RecuperarContrasenaComponent } from './pages/recuperar-contrasena/recuperar-contrasena.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
   // RecuperarContrasenaComponent,
    ContactarseComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlatpickrModule.forRoot() // Import Flatpickr module, para la fecha de defuncion
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }
