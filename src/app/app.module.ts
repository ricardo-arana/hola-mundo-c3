import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { SaludadorComponent } from './components/saludador/saludador.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    SaludadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
