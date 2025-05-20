import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { TablaResumenRoutingModule } from './tabla-resumen-routing.module';

@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    TablaResumenRoutingModule
  ]
})
export class TablaResumenModule { }
