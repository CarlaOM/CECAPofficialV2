import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Identity, } from "../../services/global";
import { Cashflowusers } from "../../modelo/cashflowusers";
// import { DescOcupation } from "../../modelo/codeDescription";

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
  providers: [PeticionesService]
})
export class EgresoComponent implements OnInit {

  // public egresoTitulo;
  public egresoDescripcion;//: codeDescription;
  public egresoEvent;
  public egresoRecibo;
  public egresoMonto;
  public egresoSucursal;
  
  public egreso;
  public sucursales;
  public eventos;

  public areaSelected;

  public catGeneral;
  public catGeneral2;
  public catEspecifica;
  public dimSuc = " ";
  public dimEvent = " ";

  public nomSucursal;
  public suc;

  public modulos;
  public modularsId; 

  constructor(
    private _peticionesService: PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.egreso = new Cashflowusers(new Date(), new Date(), 0, 0, 0, "", "", "", "", "", "")///(datestart,dateend,amount,amountdelivered,receipt,description,detailamount)
  }
  submitted = false;

  onSubmit() {
    // this.nomSucursal = this.egresoSucursal.name;
    // console.log(this.nomSucursal);
    
    console.log(this.egresoEvent);
    this.submitted = true;
    // if(this.egresoSucursal == 'Santa Cruz'){
    //   this.dimSuc = 'SC';
    // }
    // if(this.egresoSucursal == 'Cochabamba'){
    //   this.dimSuc = 'C';
    // }
    // if(this.egresoSucursal == 'Sucre'){
    //   this.dimSuc = 'S';
    // }
    // if(this.egresoSucursal == 'La Paz'){
    //   this.dimSuc = 'L';
    // }
    // if(this.egresoSucursal == 'Tarija'){
    //   this.dimSuc = 'T';
    // }
    if(this.egresoEvent == 'Seguridad Industrial'){
      
      this.dimEvent = 'H';
    }
    if(this.egresoEvent == 'Comercio Exterior'){
      this.dimEvent = 'C';
    }
    if(this.egresoEvent == 'ISO'){
      this.dimEvent = 'I';
    }
    if(this.egresoEvent == 'Proyectos'){
      this.dimEvent = 'P';
    }
    if(this.egresoEvent == 'Medio Ambiente'){
      this.dimEvent = 'M';
    }
    if(this.egresoEvent == 'Tratamiento Aguas'){
      this.dimEvent = 'A';
    }
    if(this.egresoEvent == 'Recursos Humanos'){
      this.dimEvent = 'R';
    }
    if(this.egresoEvent == 'Talleres'){
      this.dimEvent = 'T';
    }
    // this._peticionesService.getSucursal(this.egresoSucursal).subscribe(
    //   response => {
    //   this.suc = response;
    //   this.nomSucursal = this.suc.name;
    //   console.log(this.nomSucursal)
    //   console.log(this.suc);
    //   },
    //   error => {
    //     var errorMessage = <any>error;
    //     console.log(errorMessage);
    //     alert('Error sucursal');
    //   });
    var inic;
    var coma = ',';
    if(this.areaSelected == 'P' || this.areaSelected == 'F'){
      inic = this.egresoSucursal.concat(coma);
      inic = inic.concat(this.areaSelected)
      inic = inic.concat(this.catGeneral);
      inic = inic.concat(this.catEspecifica);
      inic = inic.concat(coma);
      inic = inic.concat(this.egresoEvent);
    }else{
      inic = this.egresoSucursal.concat(coma);
      inic = inic.concat(this.areaSelected)
      inic = inic.concat(this.catGeneral2);
      inic = inic.concat(this.catEspecifica);

    }
    
    // this.egreso.title=this.egresoTitulo;
    // this.egreso.description = this.egresoDescripcion;
    this.egreso.description = inic;    
    this.egreso.events = this.egresoEvent;
    this.egreso.detail_amount = this.egresoMonto;
    this.egreso.receipt = this.egresoRecibo;
    this.egreso.user = Identity._id;
    this.egreso.modulars = this.modularsId;

    console.log(this.egreso);

    this._peticionesService.addCashFlowUserEgreso(this.egreso).subscribe(
      result => {
        var returned = result;
        //  console.log(returned)
        this.router.navigate(['home/caja/vistacaja']);
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        alert('Error al Crear cashflowuseringreso');
      }
    );
  }
  ngOnInit() {
    this._peticionesService.getCatEgresos().subscribe(resp => {
      console.log(resp);
      this._peticionesService.getSucursales().subscribe(response => {
        this.sucursales = response;
        console.log(this.sucursales);
        this._peticionesService.getEvents().subscribe(response => {

          this.eventos = response;
          console.log(this.eventos);
        })
      })
    })
  }
  
  capModu(){
    this._peticionesService.getModulars(this.egresoEvent).subscribe(
      result => {
        this.modulos = result;
        for( let i of this.modulos ){
            if(i.modules == null){
                this.modulos.pop();
            }
        }
        console.log('aqui los modulos Objedts');
         console.log(this.modulos);
      },
      error=>{
        var errorMessage = <any>error;
         console.log(errorMessage);
      }
    );
  }
  idSuc(idSucur){
    console.log(idSucur);
  }
  captArea(){
    if(this.areaSelected == 'P' || this.areaSelected == 'F'){
      var a = "no";
      var concatenar = a.concat(this.areaSelected)
      console.log(concatenar); 
    }
    
  }
  captA(){
    this.catGeneral = "";
  }
  cancelar() {
    this.router.navigate(['home/caja/vistacaja']);
  }
}