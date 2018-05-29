import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {PeticionesService } from '../../services/peticiones.service';
import { Identity, } from "../../services/global";
// import { runInThisContext } from 'vm';



@Component({
  selector: 'app-vista-caja',
  templateUrl: './vista-caja.component.html',
  styleUrls: ['./vista-caja.component.css'],
  providers:[PeticionesService]

})
export class VistaCajaComponent implements OnInit {

  public detalles;
  public cash;
  public total;
  public det = [];
  public listaDescripcion=[];
  public sucursales;
  public sucursal;
  public nameSucursal;
  public listaDetalles = [];

  constructor(
    private _peticionesService:PeticionesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this._peticionesService.getSucursales().subscribe(response => {
      this.sucursales = response;
      console.log(this.sucursales);
    },error => {
      var mensage = error;
      console.log(mensage);
    });
    this._peticionesService.getCashFlowUserByUser(Identity._id).subscribe(response=>{
      this.cash=response;

      console.log(this.cash);

      this.detalles=this.cash.details;
      this.total=this.cash.amount;
      console.log(this.detalles);
      for(let detalle of this.detalles){
        let dets = {} as detalleS;
        this.det = detalle.description.split(',');
        for(var a = 0; a <this.sucursales.length ; a++){
          console.log("entra");
          if(this.sucursales[a]._id == this.det[0] ){
            console.log("enceutra");
            dets.description = this.sucursales[a].name.concat(this.det[1]);
          }
        }
        dets.title = detalle.title;
        dets.amount = detalle.amount;
        dets.date_detail = detalle.date_detail;
        dets.Input = detalle.input;
        dets.receipt = detalle.receipt;
        this.listaDetalles.push(dets);        
      }
      
      // for(var i = 0 ; i < this.detalles.length ; i++){
      //   console.log(i);
      //   console.log("entraaaa");
      // this.det = this.detalles[i].description.split(',');
      // console.log(this.det);
      
      // for(var a = 0; a <this.sucursales.length ; a++){
      //   console.log("entra");
      //   if(this.sucursales[a]._id == this.det[0] ){
      //     console.log("enceutra");
      //     this.listaDescripcion[i] = this.sucursales[a].name.concat(this.det[1]);
      //   }
      // }
      // console.log(this.listaDescripcion);  
      
      // }
    });
    console.log(this.listaDetalles); 
  }
  goIngreso(){
    this.router.navigate(['/home/caja/ingreso']);
    

  }
  goEgreso(){

    this.router.navigate(['/home/caja/egreso']);
    
  }
  goCloseCash(){
    this._peticionesService.closeCashFlowUser(Identity._id).subscribe(response=>{

      this.cash=response;
      this.detalles=this.cash.details;
      this.total=this.cash.amount;
      
    })

  }


}
export interface detalleS{
  amount: number,
  description: string,  
  receipt:number,
  date_detail:Date,
  Input: boolean,
  title: string,
}