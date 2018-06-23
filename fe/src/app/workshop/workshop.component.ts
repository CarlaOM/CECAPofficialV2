import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Person } from '../modelo/person';
import { forEach } from '@angular/router/src/utils/collection';
import { StateKey } from '@angular/platform-browser';


@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css'],
  providers: [PeticionesService]
  
})
export class WorkshopComponent implements OnInit {

  public lista_personasPorModulo=[];
  public lista_personasEventoTaller=[];
  public lista_personas=[];
  public lista;

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
            this._peticionesService.getEvent(this.eventId).subscribe(resp=>{
              this.event=resp;
              this.queryModules();
              this.queryEventTallerInscription();
              

            });
         });
         
      } 

      queryEventTallerInscription(){
        this._peticionesService.getEventTallerInscriptions(this.eventId).subscribe(response=>{

           this.lista=response;
           this.lista_personas=this.lista;
          console.log(this.lista_personas);
        })

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
            this.lista_personas=[];
            this.moduleId=_id;
            this.moduleName=nameModule;
            let moduleTaller={} as EventModuleTaller;
            moduleTaller.event=this.eventId;
            moduleTaller.module=this.moduleId;
           this._peticionesService.getEvetnModuleTallerInscriptions(moduleTaller).subscribe(res=>{

              this.lista=res;
              this.lista_personasPorModulo=this.lista;
              this.lista_personas=this.lista_personasPorModulo;
           })

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
      control(_id){
                  this.personId = _id;
                  var idEvenPers = _id + '-' + this.eventId;
                  this.router.navigate(['home/event/controPago/', idEvenPers]);
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
      cancelar(){
            window.history.back();
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
export interface EventModuleTaller{
  event:string,
  module:string,

}
