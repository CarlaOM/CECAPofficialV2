import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Identity } from '../../services/global';
import { Person } from '../../modelo/person';
import { Inscription } from '../../modelo/inscription';
import { Registro } from '../../modelo/registro';
import { DescOcupation } from '../../modelo/descOcupation';
import { Cashflowusers } from "../../modelo/cashflowusers";
import { Lists } from '../../modelo/lists';

@Component({
  selector: 'app-control-pago',
  templateUrl: './control-pago.component.html',
  styleUrls: ['./control-pago.component.css'],
  providers: [PeticionesService]
})
export class ControlPagoComponent implements OnInit {

  @ViewChild("close", { read: ElementRef }) close: ElementRef;
  @Output() messageEvent = new EventEmitter();

  public person: Person;//colection No usada
  public descOcupation: DescOcupation;//collection
  public inscription: Inscription;//collection
  public eventos;//colection
  public programs;//colection
  public personId;
  public eventId;
  public persona;
  public modulos;
  public modulsObject;
  public inscriPer;
  //public moduleId;
  public ocupSelected;
  public cartera;
  public ingresoPorInscripcion;
  public registro: Registro;
  public lists: Lists;
   public personRecived;
  submitted = false;

  constructor(
     private _peticionesService: PeticionesService,
     private route: ActivatedRoute,
     private router: Router
     
  ) {
     this.person = new Person('', '', null, null, null, '', '', null, '');
     //first_name,last_name,ci,phone,cellphone,email,ocupation,descOcupation:{ },carteras
     this.inscription = new Inscription(null, null, null, null, 0, 0, '0', '');
     //this.identy=Identity._id;
    //  this.descOcupation = new DescOcupation('', '', '', '', '', '', '');
    this.ingresoPorInscripcion = new Cashflowusers(new Date(), new Date(), 0, 0, 0, "", "", "", "", "","");
    //  this.lists = new Lists(null,0,'',null,null, '','','');//(bol, dol,receipt,assist,type,per,event,mod)
     
     this.registro = new Registro(null, null, '', '','');//inscription,persona:{},idEvent,moduleId,modularsId 

   }
  onSubmit() {
  }
  ngOnInit() {
    //  console.log(Identity._id); 
     //this.queryPrograms();
     this.queryEventId();
     this.queryPerson();
     this.queryInscriptionPerson();
     this.queryModulars();//modulars
     // this.queryEvents();
     // this.queryCartera();
  }
  queryEventId() {
    this.route.params.subscribe(params => {
      var arrayIds = params.id.split('-');
      this.personId = arrayIds[0];
      this.eventId = arrayIds[1];
      // console.log(this.eventId);
      // console.log('el id del evento ')
   });
  }
  queryPerson(){
    this._peticionesService.getPerson(this.personId).subscribe(
      result =>{
        this.persona = result;
        // console.log(this.persona);
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    )
  }
  save() {
     /////registrar inscripcion
     /////primero tiene q crearce el pago en ingreso a caja chica
     /////se registra en modulars list del evento
     /////se registra en inscription del evento
     /////se registra en perfil de la persona la inscripcion al evento
     this.inscription.users = Identity._id;
     this.registro.inscription = this.inscription;
     this.registro.eventId = this.eventId;
     this.registro.persona = this.persona;//opcional
     var arrayIds = this.modulsObject.split('-');
      this.registro.modularsId= arrayIds[0];
      this.registro.moduleId= arrayIds[1];
    //  console.log(this.registro);
     this._peticionesService.addControlPago(this.registro).subscribe(
        result => {
            var esperado = result;
            /////////////   Ingreso por inscripcin a caja Chica////////////////
            this.ingresoPorInscripcion.receipt=this.inscription.receipt;
            this.ingresoPorInscripcion.title='Inscripcion';
            this.ingresoPorInscripcion.description=this.persona.first_name+' '+this.persona.last_name;
            this.ingresoPorInscripcion.detail_amount=this.inscription.canceled_price;
            this.ingresoPorInscripcion.user=Identity._id;
            this.ingresoPorInscripcion.events=this.eventId;
            this.ingresoPorInscripcion.modulars=arrayIds[0];//
            ////////////////////////////////////
            if(this.inscription.canceled_price > 0){
                this._peticionesService.addCashFlowUserIngreso(this.ingresoPorInscripcion).subscribe(
                    result => {
                      var returned = result;
                      //alert('Control Correcto :)');
                    },
                    error => {
                      var errorMessage = <any>error;
                      console.log(errorMessage);
                      alert('Error al Crear cashflowuseringreso');
                    }
                );
            }else{
              window.alert('El precio cancelado debe ser mayor a cero(0)');//////
            }
            ///////////////////////////////////////////////////////////////////
            this.router.navigate(['home/event', this.eventId]);
            alert('Control Realizado Correctamente');
            //this.router.navigate(['home/persons']);
        },
        error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
            alert('Error al guardar, el modulo ya fue electo o pagado');
        }
     );
  }
  queryInscriptionPerson(){
    var idPersonEvent = this.personId +'-'+ this.eventId;
    this._peticionesService.getInscriptionPerson(idPersonEvent).subscribe(
      result => {
          this.inscriPer = result[0];
          // console.log(this.inscriPer);;
      },
      error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
      }
   );
  }
  queryCartera() {
     //console.log(Identity._id)
     this._peticionesService.getCarteraFromUserId(Identity._id).subscribe(
        result => {
           this.cartera = result;
           this.person.carteras = this.cartera._id
           // console.log('aqui la cartera del usuario::::');
           // console.log(this.cartera);
        },
        error => {
           var errorMessage = <any>error;
           console.log(errorMessage);
        }
     );
  }
  queryEvents() {
     this._peticionesService.getEvents().subscribe(
        result => {
           this.eventos = result;
           //console.log(this.eventos);
        },
        error => {
           var errorMessage = <any>error;
           console.log(errorMessage);
        });
  }
  queryModulos(){
   this._peticionesService.getEventModuls(this.eventId).subscribe(//consulta para obt todo modulos
     result => {
         this.modulos = result;
        //  console.log(this.modulos);
     },
     error => {
         var errorMessage = <any>error;
         console.log(errorMessage);
     });
  }
  queryModulars(){
    this._peticionesService.getModulars(this.eventId).subscribe(
      result => {
        this.modulos = result;
        this.modulos.sort((left,right)=>{
          if(left.name<right.name)return -1;
          if(left.name>right.name)return 1;
          return 0;
        });
        // console.log('aqui los modulos Objedts');
        //  console.log(this.modulos);
      },
      error=>{
        var errorMessage = <any>error;
         console.log(errorMessage);
      }
    );
  }
  cancel() {
     // this.router.navigate(['home/events']);
     window.history.back();
  }
  // onKeydown(event) {
  //   if (event.key === "Enter") {
  //      // console.log(this.person.ci > 999999);
  //      if (this.person.ci > 999999) {
  //         this._peticionesService.getCi(this.person.ci).subscribe(result => {
  //            // console.log(result);
  //            this.personRecived=result;
  //            this.person.first_name = this.personRecived.first_name;     
  //            this.person.last_name = this.personRecived.last_name;          

  //         })
  //      }
  //   }
 }


