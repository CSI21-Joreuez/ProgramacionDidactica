import { Component, OnInit } from '@angular/core';
import { Tema } from '../datos/Tema';
import { ProgramacionService } from '../datos/programacion.service';

@Component({
  selector: 'app-lista-temas',
  templateUrl: './lista-temas.component.html',
  styleUrls: ['./lista-temas.component.css']
})
export class ListaTemasComponent implements OnInit {

  temas: Tema[] =[];

  constructor(private temaService :ProgramacionService) { }

  ngOnInit(): void {
    this.getTemas();
  }

  getTemas():void{
  this.temas=this.temaService.getTemas();
  }
}
