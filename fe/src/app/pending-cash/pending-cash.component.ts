import { Component, OnInit, } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd } from "@angular/router";
import {PeticionesService } from './../services/peticiones.service';
import { Identity, } from "./../services/global";
import { Location } from "@angular/common";

@Component({
  selector: 'app-pending-cash',
  templateUrl: './pending-cash.component.html',
  styleUrls: ['./pending-cash.component.css'],
  providers:[PeticionesService]

})

export class PendingCashComponent implements OnInit {


  public cajas;
  public nuevasCajas=[];
  public pendienteUsuario;
  public pendienteFechaInicio;
  public pendieteFechaFin;
  public pendienteMonto;
  public penditeState;
  public confirmedCash;


  public test=23;
  

  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
    private location:Location,
  ) {

        
   }

  ngOnInit() {


    this._peticionesService.getCashFlowUsersPending().subscribe(response=>{

      this.cajas=response;
      this.llenarCajasNuevas();
      console.log(this.cajas);



      
    })
  }
  

  llenarCajasNuevas(){

    for(let caja of this.cajas){

      let infoCaja={} as InfoCaja;
      var user;
      var username;
      this._peticionesService.getOneUser(caja.user).subscribe(response=>{
        user=response;
        username=user.name;
        infoCaja.usuario=username;

      })
      infoCaja.fechaInicio=caja.date_start;
      infoCaja.fechaFin=caja.date_end;
      infoCaja.monto=caja.amount;
      infoCaja.idCaja=caja._id;
      infoCaja.estado=caja.state;
      this.nuevasCajas.push(infoCaja);

    }
    console.log(this.nuevasCajas);
  }
  infoPendiente(idCash){
    this.router.navigate(['home/pendientes/info/',idCash]);


  }
  confirmarCaja(idCaja){

    this._peticionesService.confirmCashFlowUser(idCaja).subscribe(response=>{

      this.confirmedCash=response;
      // this.router.navigate(['home/pendientes']);
      setTimeout(() => {
        this.router.navigate(['home/pendientes'])
      }, 500);
      
    })
    // this.router.navigateByUrl('/home/programs', {skipLocationChange: true}).then(()=>
    //   this.router.navigate(["/home/reports"])).then(()=>this.router.navigate(['home/pendientes']));

        // this.router.navigateByUrl('/home/pendientes', {skipLocationChange: true})
      


  }
  

}


export interface InfoCaja{

  usuario:string,
  fechaInicio:Date,
  fechaFin:Date,
  monto:number,
  idCaja:string,
  estado:number
}
