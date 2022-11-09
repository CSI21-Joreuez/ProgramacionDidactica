import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaTemasComponent } from './lista-temas/lista-temas.component';
import { DetalleTemaComponent } from './detalle-tema/detalle-tema.component';
import { ListaCompletaTemasComponent } from './lista-completa-temas/lista-completa-temas.component';
import { NuevoTemasComponent } from './nuevo-temas/nuevo-temas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaTemasComponent,
    DetalleTemaComponent,
    ListaCompletaTemasComponent,
    NuevoTemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
