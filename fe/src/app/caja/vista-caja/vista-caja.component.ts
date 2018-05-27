import { Component, OnInit } from '@angular/core';
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
      for(var i = 0 ; i < this.detalles.length ; i++){
        console.log(i);
        console.log("entraaaa");
      this.det = this.detalles[i].description.split(',');
      console.log(this.det);
      
      for(var a = 0; a <this.sucursales.length ; a++){
        console.log("entra");
        if(this.sucursales[a]._id == this.det[0] ){
          console.log("enceutra");
          this.listaDescripcion[i] = this.sucursales[a].name.concat(this.det[1]);
        }
      }
      console.log(this.listaDescripcion);  
      
      }
      console.log(this.listaDescripcion[1]);          
    });
    console.log(this.listaDescripcion); 
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
