import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Person } from '../modelo/person';
import { forEach } from '@angular/router/src/utils/collection';
import { StateKey } from '@angular/platform-browser';

@Component({
   selector: 'app-event',
   templateUrl: './event.component.html',
   styleUrls: ['./event.component.css'],
   providers: [PeticionesService]
})
export class EventComponent implements OnInit, AfterViewInit {
      public lista_personasPorModulo=[];

      public lista_modulos;
      public event;
      public modules;
      public inscriptions;

      public modularForAssist;
      public personId;
/////////////////para jlistar por modulos////
      public moduleId;
      public eventId;
      public moduleName;
      
//////////////////////////////////////////////
      constructor(
                 private route: ActivatedRoute,
                 private router: Router,
                 private _peticionesService: PeticionesService
                ) { }

      ngOnInit(){
         this.route.params.subscribe(params => {
         this.eventId = params.id;
         console.log(this.eventId)
         });
         this.queryEventInscription();
      }
      queryEventInscription() {
            this._peticionesService.getEventInscriptions(this.eventId).subscribe(
            result => {
                  this.event = result;
                  this.queryModules();

                  console.log(this.event);
                  this.inscriptions = this.event.inscriptions;
                  var total = this.event.total;   
                  this.lista_personasPorModulo=this.inscriptions;       
            },
            error => {
                  var errorMessage = <any>error;
                  console.log(errorMessage);
            }
            );
      }

      queryModules() {
                   this._peticionesService.getModulos(this.event.programs).subscribe(
                      result => {
                         this.modules = result;
                         this.modules.sort((left,right)=>{
                               if(left.name<right.name)return -1;
                               if(left.name>right.name)return 1;
                               return 0;
                         });
                      }
                   )
      }
      setListInscriptions(_id:string,nameModule:string){
            
            this.lista_personasPorModulo=[];
            this.moduleId=_id;
            this.moduleName=nameModule;
            for(let i of this.inscriptions){


                  let persona={}as PersonItem;
                  persona.persons=i.persons;
                  persona.name=i.name;
                  persona.ci=i.ci;
                  persona.cellphone=i.cellphone;
                  persona.canceled_price=i.canceled_price;
                        let personEventModule={}as PersonEventModule;
                        personEventModule.personId=i.persons
                        personEventModule.moduleId=this.moduleId;
                        personEventModule.eventId=this.eventId; 
                        console.log(personEventModule);
                  this._peticionesService.getAsistenciaOfPerson(personEventModule).subscribe(response=>{

                        this.modularForAssist=response;
                        persona.assist=this.modularForAssist.assist;
                  })

                  this.lista_personasPorModulo.push(persona);
            }
            console.log(this.moduleId);



      }
      viewProfile(personId) {
            this.router.navigate(['home/profilePerson', personId]);
      }
      edit(personId) {
            this.router.navigate(['home/persons/edit', personId])
      }
      asistence(_id) {
                  this.personId = _id;
                  var idEvenPers = _id + '-' + this.eventId;
                  this.router.navigate(['home/event/asistencia', idEvenPers]);
      }
      marcarAsistencia(idperson){
            let personEventModule={}as PersonEventModule;
            personEventModule.personId=idperson;
            personEventModule.moduleId=this.moduleId;
            personEventModule.eventId=this.eventId;

            this._peticionesService.marcarAsistencia(personEventModule).subscribe(response=>{
                  this.setListInscriptions(this.moduleId,this.moduleName);

            });


      }
            
      ngAfterViewInit(){}


}
export interface PersonEventModule{

      personId:string,
      eventId:string,
      moduleId:string,
}
export interface PersonItem{

      persons:string,
      name:string,
      ci:number,
      cellphone:number,
      canceled_price:number,
      assist:boolean
}


// ///////////////////////////////max////////////////////////////
//    public eventId;
//    public event;
//    public inscriptions;
//    public ocupation;
//    public states: Array<any> = [];
//    public personId;
//    public modules;
//    public list;
//    public color;
//    constructor(
//       private route: ActivatedRoute,
//       private router: Router,
//       private _peticionesService: PeticionesService
//    ) { }
//    addPerson() {
//       this.router.navigate(['home/event/persons/add']);
//    }
//    ngOnInit() {
//       this.queryEventId();
//       this.query();
//    }
//    ngAfterViewInit() {
//       // this.controlAssist()
//       // this.todos();
//    }
//    queryModules() {
//       this._peticionesService.getModulos(this.event.programs).subscribe(
//          result => {
//             this.modules = result;
//             // console.log(result);
//          }
//       )
//    }
//    receiveMessage() {
//       this.query();
//    }
//    asistence(_id) {//enviar eventId
//       this.personId = _id;
//       var idEvenPers = _id + '-' + this.eventId;
//       this.router.navigate(['home/event/asistencia', idEvenPers]);
//    }
//    controlAssist() {
//       this._peticionesService.getList(this.personId).subscribe(
//          result => {
//             this.list = result;
//             console.log(this.list);
//             //  if(personList == null){
//             //  }
//          },
//          error => {
//             var errorMessage = <any>error;
//             console.log(errorMessage);
//          }
//       );
//    }
//    butonv(_id) {
//       if (this.color == 'rojo') {
//          this.router.navigate(['home/event/asistencia', _id]);
//          this.color = 'verde'
//       }
//       else { this.color = 'rojo' }
//    }
//    filter(modular_id){
//       console.log(modular_id);
// // solicitar lista de personas inscritas por modulo
//    }
//    queryEventId() {
//       this.route.params.subscribe(params => {
//          this.eventId = params.id;
//          console.log(this.eventId)
//       });
//    }
//    query() {
//       this._peticionesService.getEventInscriptions(this.eventId).subscribe(
//          result => {
//             this.event = result;
//             this.queryModules();

//             console.log(this.event);
//             this.inscriptions = this.event.inscriptions;

//             //prueba total
//             var total = this.event.total;
//             //console.log(this.inscriptions);
//             this.todos();
//             // console.log(total);
//          },
//          error => {
//             var errorMessage = <any>error;
//             console.log(errorMessage);
//          }
//       );
//    }
//    edit(personId) {//, personName) {
//       // console.log('antes de enviar', personId)
//       //this.router.navigate(['home/editPerson', personId + '-' + this.eventId]);
//       this.router.navigate(['home/persons/edit', personId])
//    }
//    viewProfile(personId) {
//       this.router.navigate(['home/profilePerson', personId]);
//    }
//    todos() {
//       for (let i = 0; i <= this.states.length; i++) {
//          this.states.pop(); i = 0;
//       }
//       for (let i of this.inscriptions) {
//          this.states.push(i);
//       }
//    }
//////////////////////////////max/////////////////////////////////////

   // inscritos() {
   //    for (let i = 0; i <= this.states.length; i++) {
   //       this.states.pop(); i = 0;
   //    }
   //    for (let i of this.inscriptions) {
   //       if (i.canceled_price > 0) { this.states.push(i); }
   //    }
   // }
   // confirmados() {
   //    for (let i = 0; i <= this.states.length; i++) {
   //       this.states.pop(); i = 0;
   //    }
   //    for (let i of this.inscriptions) {
   //       if (i.state == 3) {
   //          this.states.push(i);
   //       }
   //    }
   // }
   // interesados() {
   //    for (let i = 0; i <= this.states.length; i++) {
   //       this.states.pop(); i = 0;
   //    }
   //    for (let i of this.inscriptions) {
   //       if (i.state == 2) {
   //          this.states.push(i);
   //       }
   //    }
   // }
   // noParticipa() {
   //    for (let i = 0; i <= this.states.length; i++) {
   //       this.states.pop(); i = 0;
   //    }
   //    for (let i of this.inscriptions) {
   //       if (i.state == 4) {
   //          this.states.push(i);
   //       }
   //    }
   // }
   // proximo() {
   //    for (let i = 0; i <= this.states.length; i++) {
   //       this.states.pop(); i = 0;
   //    }
   //    for (let i of this.inscriptions) {
   //       if (i.state == 5) {
   //          this.states.push(i);
   //       }
   //    }
   // }
   // enDuda() {
   //    for (let i = 0; i <= this.states.length; i++) {
   //       this.states.pop(); i = 0;
   //    }
   //    for (let i of this.inscriptions) {
   //       if (i.state == 0) { this.states.push(i); }
   //    }
   // }
////////////////////////////////////////////////////////////////max/////////////////////
// }


