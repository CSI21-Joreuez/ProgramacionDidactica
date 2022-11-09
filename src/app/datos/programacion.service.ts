import { Injectable } from '@angular/core';
import { Tema } from './Tema';
import { TEMAS } from './mock-Programacion';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  listaDeTemas: Tema[] = [];
  detalleTemas?: Tema;
  constructor() 
  {
    this.listaDeTemas =TEMAS;
   }
   getTemas(): Tema[]
   {
    return this.listaDeTemas;
   }
   getDetalleTemas(id: number):Tema
   {
  const tema = this.listaDeTemas.find(t => t.tema === id)!;
  return tema;
   }
   setTema(tema: Tema):void
   {
    this.listaDeTemas.push(tema);
   }
}
