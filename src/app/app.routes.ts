import { Routes } from '@angular/router';
import { FormularioMetaComponent } from './meta/formulario-meta/formulario-meta.component';
import { FormularioRegistroComponent } from './registro/formulario-registro/formulario-registro.component';
import { TablaResumenComponent } from './resumen/tabla-resumen/tabla-resumen.component';

export const routes: Routes = [
  { path: 'meta', component: FormularioMetaComponent },
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'resumen', component: TablaResumenComponent },
  { path: '', redirectTo: '/meta', pathMatch: 'full' }
];
