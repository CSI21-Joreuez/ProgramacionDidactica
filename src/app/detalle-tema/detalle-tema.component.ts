import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramacionService } from '../datos/programacion.service';
import { Tema } from '../datos/Tema';

@Component({
  selector: 'app-detalle-tema',
  templateUrl: './detalle-tema.component.html',
  styleUrls: ['./detalle-tema.component.css']
})
export class DetalleTemaComponent implements OnInit {

  numTema: number;
  temaActual?:Tema;
  constructor(
    private temaService : ProgramacionService
    ,private ruta: ActivatedRoute,
    private location: Location
    ) {
      this.numTema = Number(this.ruta.snapshot.paramMap.get('num'))!;
     }

  ngOnInit(): void {
    this.temaActual  = this.temaService.getDetalleTemas(this.numTema);
  }
  
  goBack(): void {
  this.location.back();
  }

}
