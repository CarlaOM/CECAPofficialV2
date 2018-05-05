import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import {PeticionesService } from '../../services/peticiones.service';
import { Identity, } from "../../services/global";
import { Cashflowusers } from "../../modelo/cashflowusers";

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
  providers:[PeticionesService]
  
})
export class IngresoComponent implements OnInit {


  public ingresoTitulo;
  public ingresoDescripcion;
  public ingresoNombreInscrito;
  public ingresoCi;
  public ingresoRecibo;
  public ingresoMontoBase;
  public ingresoMonto;
  public ingreso;

  // public ingreso:Cashflowusers;

  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,



  ) {
    this.ingreso=new Cashflowusers(new Date(),new Date(),0,0,0,"","","")///(datestart,dateend,amount,amountdelivered,receipt,description,detailamount)

   }


  submitted = false;
 

  ngOnInit() {

  }

  onSubmit() { 
    this.submitted = true;
    
    this.ingreso.date_start=new Date;
    this.ingreso.date_end=new Date;
    this.ingreso.amount=this.ingresoMontoBase;
    this.ingreso.amount_delivered=this.ingresoMonto;
    this.ingreso.receipt=this.ingresoRecibo;
    this.ingreso.description="Titulo : "+this.ingresoTitulo+"\n"+
                              "Nombre Inscrito : "+this.ingresoNombreInscrito+"\n"+
                              "Ci : "+this.ingresoCi+"\n"+
                              "Descripcion: "+this.ingresoDescripcion;
    this.ingreso.detail_amount=this.ingresoMonto;
    this.ingreso.user=Identity._id;


    console.log(this.ingreso);
    console.log(Identity._id);

    this._peticionesService.addCashFlowUserIngreso(this.ingreso).subscribe(
      result => {
        var returned = result;
       console.log(returned)
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        alert('Error al Crear cashflowuseringreso');
      }
    );

  
  }
 

}
