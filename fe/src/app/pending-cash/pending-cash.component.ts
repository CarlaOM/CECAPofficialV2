import { Component, OnInit, } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd } from "@angular/router";
import {PeticionesService } from './../services/peticiones.service';
import { Identity, } from "./../services/global";
import { Location } from "@angular/common";
import { CashFlowOffices } from "./../modelo/cashFlowOffices";
// import { WSAEADDRINUSE } from 'constants';

@Component({
  selector: 'app-pending-cash',
  templateUrl: './pending-cash.component.html',
  styleUrls: ['./pending-cash.component.css'],
  providers:[PeticionesService]

})

export class PendingCashComponent implements OnInit {


  public cajas;
  public nuevasCajas=[];
 
  
  public confirmedCashUser;
  public btnInactive=true;

  public cashOffice;
  public currentCashFlowOffice;


  public cashFlowOfficeAmount;
  public closeCashFlowOffice;


  public closedCashFlowUserFromManager;

  public newCashOffice;
  public currentOffice;
  public amountDelivered;
  public principal;
  public validateCloseCashButton=0;
  public validateCloseCashButtonBoolean=false;

  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
    private location:Location,
  ) {

    // this.cashOffice=new CashFlowOffices(new Date(),new Date(),null,null,'',new Date(),'','');
    ///cashFlowOffice(date_start,date_end,amount,amount_delivered,cashFLOWuSER,DATECLOSECASH,OFFICES)

      this.newCashOffice=new CashFlowOffices(new Date(),new Date(),null,null,'',null,'','','');
     }

    

  ngOnInit() {
    // console.log(Identity._id);
    this.cajas=[];
    this.nuevasCajas=[];
    this.validateCloseCashButton=0;
    this.validateCloseCashButtonBoolean=false;
    this.btnInactive=true;
    this.cashFlowOfficeAmount=null;

    
    
    

    this._peticionesService.getOfficeFromUser(Identity._id).subscribe(response=>{
      this.currentOffice=response;

      this._peticionesService.getCashFlowUsersPending(Identity._id).subscribe(response=>{

        this.cajas=response;
        // console.log(this.cajas)
        this.llenarCajasNuevas();
        // console.log(this.cajas);
  
        
  
        
      })

    })

   
  ///////obtenemos  cashflowoffice  de nuestro usuario que tiene su sucursal////
    this._peticionesService.getCurrentCashFlowOffice(Identity._id).subscribe(response=>{

      this.currentCashFlowOffice=response;
      // console.log(this.currentCashFlowOffice);

      this.cashFlowOfficeAmount=this.currentCashFlowOffice.amount;     

    })
  }
  

  llenarCajasNuevas(){
    let infoCajaSaldo={}as InfoCaja;
    infoCajaSaldo.estado=4;
    infoCajaSaldo.fechaFin=new Date();
    infoCajaSaldo.fechaInicio=new Date();
    infoCajaSaldo.idCaja='';
    infoCajaSaldo.monto=0;
    infoCajaSaldo.montoEntregado=this.currentOffice.caja;
    infoCajaSaldo.usuario="Saldo Caja";
    this.nuevasCajas.push(infoCajaSaldo);

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
      infoCaja.montoEntregado=caja.amount_delivered;
      infoCaja.idCaja=caja._id;
      infoCaja.estado=caja.state;
      if(infoCaja.estado==1){
        this.validateCloseCashButton++;
        // console.log(this.validateCloseCashButton+"------aaaaaaaaaaaaaaaaaaaaaa");
      }
      this.nuevasCajas.push(infoCaja);

      
      

    }

    if(this.nuevasCajas.length-1==this.validateCloseCashButton){
      this.validateCloseCashButtonBoolean=true;
      // console.log("lo cambiamos a TRUEEEEEE") 
    }
    // console.log(this.validateCloseCashButtonBoolean)
    
    // console.log(this.nuevasCajas);
  }
  
  infoPendiente(idCash){
    var IdUserCashIdOfficeCash=idCash+'-'+this.currentCashFlowOffice._id
    this.router.navigate(['home/pendientes/info/',IdUserCashIdOfficeCash]);


  }

  cerrarCajaSucursal(){
    if(this.cajas.length>0){
      for(let caja of this.nuevasCajas){
        this._peticionesService.closeCashFlowUserFromManager(caja.idCaja).subscribe(response=>{
  
  
          this.closedCashFlowUserFromManager=response;
        });
      }
    }
    
    this.currentCashFlowOffice.amount_delivered=this.amountDelivered;
    this._peticionesService.closeCashFlowOffice(this.currentCashFlowOffice).subscribe(response=>{
      this.currentOffice=response;

      // console.log(this.currentCashFlowOffice);
      this._peticionesService.addDetailToPrincipal(this.currentCashFlowOffice).subscribe(res=>{
        this.principal=res;

      })
      this.newCashOffice.user=Identity._id;
      this.newCashOffice.offices=this.currentOffice;
      // console.log(this.newCashOffice);
      
      this._peticionesService.addNewCashFlowOffice(this.newCashOffice).subscribe(response=>{

        var newCashOffice=response;
       
        this.ngOnInit();
      })

      

    })

  }
  sendToPrincipal(){

  }
  onSubmit(){
    if(this.amountDelivered<=this.cashFlowOfficeAmount){
    this.cerrarCajaSucursal();
      
    }else{
      window.alert('El monto no debe ser mayot al total');
      // this.amountDelivered=null;
    }

  }
  cancelar(){
    window.history.back();
  }


}


export interface InfoCaja{

  usuario:string,
  fechaInicio:Date,
  fechaFin:Date,
  monto:number,
  montoEntregado:number,
  idCaja:string,
  estado:number
}
