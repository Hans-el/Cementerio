import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactarseComponent } from './pages/contactarse/contactarse.component';
import { LocalizarComponent } from './pages/localizar/localizar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DisponibilidadComponent } from './pages/disponibilidad/disponibilidad.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'localizar', component: LocalizarComponent },
      { path: 'contactarse', component: ContactarseComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'disponibilidad', component: DisponibilidadComponent },

      // añadir todas las rutas que tengan el header y footer.
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  // y acá añadir las rutas que no lleven el header ni footer
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
