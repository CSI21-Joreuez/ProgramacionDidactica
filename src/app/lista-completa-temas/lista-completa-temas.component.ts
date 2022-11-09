import { Component, OnInit } from '@angular/core';
import { ProgramacionService } from '../datos/programacion.service';
import { Tema } from '../datos/Tema';

@Component({
  selector: 'app-lista-completa-temas',
  templateUrl: './lista-completa-temas.component.html',
  styleUrls: ['./lista-completa-temas.component.css']
})
export class ListaCompletaTemasComponent implements OnInit {

  temas: Tema[] =[];

  constructor(private temaService :ProgramacionService) { }

  ngOnInit(): void {
    this.getTemas();
  }

  getTemas():void{
  this.temas=this.temaService.getTemas();
  }
}
