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
  selector: 'app-nivelacion',
  templateUrl: './nivelacion.component.html',
  styleUrls: ['./nivelacion.component.css'],
  providers: [PeticionesService]
})
export class NivelacionComponent implements OnInit {

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

   public canceledprice;
   public debtPrice;
   public modulsNot;

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
      this.currentCashFlow();
      this.queryEventId();
      this.queryModulars();
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
            this._peticionesService.getCiAmount(this.person.ci +'-'+ this.eventId).subscribe(result => {
               // console.log(result);
               this.personRecived=result;
               this.person.first_name = this.personRecived.first_name;     
               this.person.last_name = this.personRecived.last_name;          
               this.inscription.price_event=this.personRecived.profile.total_price;
               this.canceledprice= this.personRecived.profile.payed;
               this.debtPrice= this.personRecived.profile.debt;
               this.modulsNot=this.personRecived.modularsPer;
               console.log(this.modulsNot);
            })
         }

      }
   }
   guardar() {
      this.person.descOcupation = this.descOcupation;
      this.inscription.users = Identity._id;
      this.registro.inscription = this.inscription;
      this.registro.eventId = this.eventId;
      this.registro.persona = this.person;//opcional
      var arrayIds = this.modulsObject.split('-');
      this.registro.modularsId= arrayIds[0];
      this.registro.moduleId= arrayIds[1];
      console.log(this.registro);
      if(this.inscription.price_event > 0){
        this._peticionesService.addNivelacion(this.registro).subscribe(
          result => {
              var esperado = result;
              /////////////   Ingreso por inscripcin a caja Chica////////////////

              this.ingresoPorInscripcion.receipt=this.inscription.receipt;
              this.ingresoPorInscripcion.title='Inscripcion';
              this.ingresoPorInscripcion.description=this.person.first_name+' '+this.person.last_name;
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
              }
              ///////////////////////////////////////////////////////////////////
              this.router.navigate(['home/event', this.eventId]);
              window.alert("Se Registro a la persona de manera correcta");
              //this.router.navigate(['home/persons']);

          },
          error => {
              var errorMessage = <any>error;
              console.log(errorMessage);
              alert('Error al registrar, La Persona ya esta inscrito');
          }
        );
      }else{
        window.alert("El Precio Definido es obligatorio, no se permite 0");
      }
   }
   captOcupation() {
      console.log(this.ocupSelected);
      this.descOcupation.universidad = ''; this.descOcupation.carrera = '';
      this.descOcupation.semestre = ''; this.descOcupation.areaTrabajo = '';
      this.descOcupation.profesion = ''; this.descOcupation.cargo = '';
      this.descOcupation.empresa = '';
      this.person.ocupation = this.ocupSelected;
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
        for( let i of this.modulos ){
            if(null == i.modules){
                this.modulos.splice(i, 1);
                //this.modulos.pop(i);
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
