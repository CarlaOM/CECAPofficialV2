import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Identity,Roles } from '../services/global';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-reporte-eventos',
  templateUrl: './reporte-eventos.component.html',
  styleUrls: ['./reporte-eventos.component.css'],
  providers: [ PeticionesService]  
})
export class ReporteEventosComponent implements OnInit {
  public events;
  public eventos;
  public fechaIni;
  public fechaFin;
  public fechas={} as Fechas;

  constructor(
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    // this.queryRol();
    this.queryEvents(); 
    // this.reporte();
  }
  reporte(){
    if(this.fechaIni<this.fechaFin){
        this.fechas.fechaIni = this.fechaIni;
        this.fechas.fechaFin = this.fechaFin;
        console.log(this.fechas)
        this._peticionesService.reporteEvento(this.fechas).subscribe(response => {
        this.eventos = response;
      })
    }else{alert("La Fecha Fin debe ser una fecha mayor a Fecha Inicio")}
    
    
  }
  buscar(){

  }
  queryEvents() {
    this._peticionesService.getEvents().subscribe(
       result => {
          this.events = result;
         console.log(this.events)
          // this.events.map(event => {
          //    var sum = 0;
          //    event.inscriptions.forEach(e => {
          //       if (e.state == 1) sum++;
          //    });
          //    event.cupos = event.total - sum;
          // });
       },
       error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
       }
    );
 }
 viewPrint(_id: string) {
  this.router.navigate(['home/listPrint', _id]);
}
viewRequirements(_id: string) {
  this.router.navigate(['home/listRequeriments', _id]);
}
accountsRec(_id: string) {
  this.router.navigate(['home/accountsReceivable', _id]);
}
send(_id: string) {
this.router.navigate(['home/event', _id]);
}
}

export interface Fechas{
  fechaIni:Date,
  fechaFin:Date
}