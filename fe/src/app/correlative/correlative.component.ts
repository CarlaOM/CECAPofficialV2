import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-correlative',
  templateUrl: './correlative.component.html',
  styleUrls: ['./correlative.component.css'],
  providers: [PeticionesService]  
})
export class CorrelativeComponent implements OnInit {
  public correlativo;
  public corrFechas;

  //////////////////////////////////////////////////
  public page;
public total;
public totalPag;
public mostrar = [];
///////////////////////////////////////////////////
public fechaIni;
  public fechaFin;
  public fechas={} as Fechas;
///////////////////////////////////////////////////

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.getCorre();
  }
  getCorre(){
      this._peticionesService.getCorrelativos().subscribe( res => {
        this.correlativo = res
        this.mostrarPer()
      })
  }
  dis(){
    this.page = this.page-1;
    var inicio = (8*(this.page-1));
    var final = (8*(this.page-1))+8;
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
      this.mostrar.push(this.correlativo[a]);
  }
  }
  aum(){
    this.page = this.page+1;
    // console.log(this.page)
    var inicio = (8*(this.page-1));
    // console.log(inicio)
    var final = (8*(this.page-1))+8;
    if(final > this.total){
      final = this.total;
    }
    // console.log(final)
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
        this.mostrar.push(this.correlativo[a]);
    }
  }
  mostrarPer(){
    this.page = 1;
    this.total = this.correlativo.length;
    if(this.total == 0){
      this.totalPag = 1;
    } else{
    this.totalPag = Math.ceil(this.total/8);
    }
    this.mostrar = []
    // console.log(this.totalPag)
    if(this.totalPag > 1){
      for(var a = 0 ; a < 8 ; a++){
      this.mostrar.push(this.correlativo[a]) ;}
      // console.log("entro")
    } else{
      this.mostrar = this.correlativo;
    }
    // console.log(this.mostrar)
  }
  cancelar(){
    this.router.navigate(['/home/events']);
  }
  reporte(){
    if(this.fechaIni<this.fechaFin){
        this.fechas.fechaIni = this.fechaIni;
        this.fechas.fechaFin = this.fechaFin;
        // console.log(this.fechas)
        this._peticionesService.correlativeDate(this.fechas).subscribe(response => {
        this.corrFechas = response;
        this.mostrar = this.corrFechas;
      })
    }else{alert("La Fecha Fin debe ser una fecha mayor a Fecha Inicio")}
    
    
  }

}
export interface Fechas{
  fechaIni:Date,
  fechaFin:Date
}
