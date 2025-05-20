import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Agrega esta línea
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // <-- Agrega aquí también
    HomeRoutingModule
  ]
})
export class HomeModule { }