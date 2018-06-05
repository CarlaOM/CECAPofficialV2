import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
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
   selector: 'app-inscription',
   templateUrl: './inscription.component.html',
   styleUrls: ['./inscription.component.css'],
   providers: [PeticionesService]
})
export class InscriptionComponent implements OnInit {
   @ViewChild("close", { read: ElementRef }) close: ElementRef;
   @Output() messageEvent = new EventEmitter();

   public person: Person;//colection
   public descOcupation: DescOcupation;//collection
   public inscription: Inscription;//collection
   public eventos;//colection
   public programs;//colection
   public eventId;
   public modulsObject;
   
   //public moduleId;
   public ocupSelected;
   public cartera;
   public ingresoPorInscripcion;
   public modulos;
   public registro: Registro;
   public lists: Lists;
    public personRecived;
   submitted = false;

   public cashFLowUser;

   constructor(
      private _peticionesService: PeticionesService,
      private route: ActivatedRoute,
      private router: Router
   ) {
      this.person = new Person('', '', null, null, null, '', '', null, '');
      //first_name,last_name,ci,phone,cellphone,email,ocupation,descOcupation:{ },carteras
      this.inscription = new Inscription(null, null, null, null, 0, 0, '0', '');
      //this.identy=Identity._id;
      this.descOcupation = new DescOcupation('', '', '', '', '', '', '');
      this.registro = new Registro(null, null, '', '','');//idEvent,idUser,persona:{}, montCancel

      this.ingresoPorInscripcion = new Cashflowusers(new Date(), new Date(), 0, 0, 0, "", "", "", "", "","");
      this.lists = new Lists(null,0,'',null,null, '','','');//(bol, dol,receipt,assist,type,per,event,mod)
    }
   onSubmit() {
   }
   ngOnInit() {
      console.log(Identity._id); 
      //this.queryPrograms();
      this.currentCashFlow();
      this.queryEventId();
      this.queryModulars();
      //this.queryModulos();
      // this.queryEvents();
      // this.queryCartera();
   }
   queryEventId() {
      this.route.params.subscribe(params => {
         this.eventId = params.id;
         // console.log(this.eventId)
      });
   }

   currentCashFlow(){
       this._peticionesService.getCashFlowUserByUser(Identity).subscribe(response=>{

            this.cashFLowUser=response;
       })
   }
   onKeydown(event) {
      if (event.key === "Enter") {
         // console.log(this.person.ci > 999999);
         if (this.person.ci > 999999) {
            this._peticionesService.getCi(this.person.ci).subscribe(result => {
               // console.log(result);
               this.personRecived=result;
               this.person.first_name = this.personRecived.first_name;     
               this.person.last_name = this.personRecived.last_name;          

            })
         }

      }
   }
   guardar() {
      /////registrar inscripcion
      /////primero tiene q crearce el pago en ingreso a caja chica
      /////se registra en modulars list del evento
      /////se registra en inscription del evento
      /////se registra en perfil de la persona la inscripcion al evento
      

      this.person.descOcupation = this.descOcupation;
      this.inscription.users = Identity._id;
      this.registro.inscription = this.inscription;
      this.registro.eventId = this.eventId;
      this.registro.persona = this.person;//opcional
      var arrayIds = this.modulsObject.split('-');
      this.registro.modularsId= arrayIds[0];
      this.registro.moduleId= arrayIds[1];
    //   this.registro.cashFlowUser=this.cashFLowUser;
      console.log(this.registro);
      this._peticionesService.addInscriptPerson(this.registro).subscribe(
         result => {
            var esperado = result;
            console.log(esperado);
            alert('control correcto');
      //       /////////////   Ingreso por inscripcin a caja Chica////////////////

      //       // this.ingresoPorInscripcion.receipt=this.inscription.receipt;
      //       // this.ingresoPorInscripcion.title='Inscripcion';
      //       // this.ingresoPorInscripcion.description=this.person.first_name+' '+this.person.last_name;
      //       // this.ingresoPorInscripcion.detail_amount=this.inscription.canceled_price;
      //       // this.ingresoPorInscripcion.user=Identity._id;
      //       // this.ingresoPorInscripcion.events=this.IdEvent;
      //       // ////////////////////////////////////
      //       // this._peticionesService.addCashFlowUserIngreso(this.ingresoPorInscripcion).subscribe(
      //       //     result => {
      //       //       var returned = result;
      //       //     },
      //       //     error => {
      //       //       var errorMessage = <any>error;
      //       //       console.log(errorMessage);
      //       //       alert('Error al Crear cashflowuseringreso');
      //       //     }
      //       //   );

      //       ///////////////////////////////////////////////////////////////////
      //       this.router.navigate(['home/events']);
      //       alert('Se Registro a la persona de manera correcta');
      //       //this.router.navigate(['home/persons']);
            this.router.navigate(['home/events']);
            alert('La inscripcion fue exitosa');
         },
         error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
            alert('Error al registrar, Persona ya esta inscrito');
         }
      );
   }
   captOcupation() {
      console.log(this.ocupSelected);
      this.descOcupation.universidad = ''; this.descOcupation.carrera = '';
      this.descOcupation.semestre = ''; this.descOcupation.areaTrabajo = '';
      this.descOcupation.profesion = ''; this.descOcupation.cargo = '';
      this.descOcupation.empresa = '';
      this.person.ocupation = this.ocupSelected;
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
    this.route.params.subscribe(params => {
        this.eventId = params.id;
        // console.log(this.eventId)
     });
    this._peticionesService.getEventModuls(this.eventId).subscribe(//consulta para obt todo modulos
      result => {
          this.modulos = result;
          console.log(this.modulos);
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
   cancel() {
      // this.router.navigate(['home/events']);
      window.history.back();
   }
}
