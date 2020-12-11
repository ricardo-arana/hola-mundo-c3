import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { SaludadorComponent } from './components/saludador/saludador.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListaBodyComponent } from './components/lista-body/lista-body.component';
import { ListaInputComponent } from './components/lista-input/lista-input.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    SaludadorComponent,
    ListaComponent,
    ListaBodyComponent,
    ListaInputComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
