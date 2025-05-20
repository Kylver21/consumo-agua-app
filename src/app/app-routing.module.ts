import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'seguimiento', loadChildren: () => import('./seguimiento/seguimiento.module').then(m => m.SeguimientoModule) },
  { path: 'tabla-resumen', loadChildren: () => import('./tabla-resumen/tabla-resumen.module').then(m => m.TablaResumenModule) },
  { path: 'acerca-de', loadChildren: () => import('./acerca-de/acerca-de.module').then(m => m.AcercaDeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }