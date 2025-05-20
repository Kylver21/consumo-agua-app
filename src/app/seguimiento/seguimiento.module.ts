import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { SeguimientoRoutingModule } from './seguimiento-routing.module';

@NgModule({
  declarations: [
    SeguimientoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SeguimientoRoutingModule
  ]
})
export class SeguimientoModule { }
