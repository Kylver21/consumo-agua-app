import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavModule } from './nav/nav.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule // <-- agrega aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
