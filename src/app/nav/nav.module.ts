import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule // <-- necesario para routerLink
  ],
  exports: [NavComponent]
})
export class NavModule { }