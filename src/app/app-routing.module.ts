import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTemasComponent } from './lista-temas/lista-temas.component';
import { ListaCompletaTemasComponent } from './lista-completa-temas/lista-completa-temas.component';
import { DetalleTemaComponent } from './detalle-tema/detalle-tema.component';
import { NuevoTemasComponent } from './nuevo-temas/nuevo-temas.component';

const routes: Routes = [
  {
    path: 'temas',
    component: ListaTemasComponent
  },
  {
    path: 'lista-completa',
    component: ListaCompletaTemasComponent
  },
  {
    path:'detalle/:num',
    component:DetalleTemaComponent
  },
  {
    path:'nuevo-temas',
    component:NuevoTemasComponent
  },
  {
    path:'editar-tema/:num',
    component:NuevoTemasComponent
  },
  {
    path:'**',
    redirectTo: '/temas',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
